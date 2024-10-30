let svgData = [];
let canvasOperations = new Map();

// Intercept canvas operations
function interceptCanvasOperations() {
  const originalGetContext = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function () {
    const context = originalGetContext.apply(this, arguments);
    if (context && arguments[0] === "2d") {
      // Wrap important drawing methods
      const originalDrawImage = context.drawImage;
      context.drawImage = function () {
        const result = originalDrawImage.apply(this, arguments);
        if (arguments[0] instanceof HTMLImageElement) {
          const sourceUrl = arguments[0].src;
          if (sourceUrl && sourceUrl.includes("svg")) {
            canvasOperations.set(this.canvas.id, {
              sourceImage: arguments[0].src,
              timestamp: Date.now(),
            });
          }
        }
        return result;
      };
    }
    return context;
  };
}

function decodeUrlEncodedSVG(url) {
  if (!url.includes("data:image/svg+xml,")) return null;

  try {
    const svgContent = decodeURIComponent(url.split("data:image/svg+xml,")[1]);
    return svgContent;
  } catch (e) {
    console.error("Error decoding SVG:", e);
    return null;
  }
}

function generateFileName(element, type, index) {
  // Try to get meaningful name from various attributes
  const id = element.id || element.closest("[id]")?.id;
  const alt = element instanceof HTMLImageElement ? element.alt : null;
  const title = element.getAttribute("title");
  const ariaLabel = element.getAttribute("aria-label");

  // Use the first available identifier
  const name = id || alt || title || ariaLabel;

  if (name) {
    // Clean the name to be file-system friendly
    const cleanName = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    return `${cleanName}-${type}`;
  }

  // Fallback to type-based naming with index
  return `${type}-${index}`;
}

function captureUrlEncodedSVGs() {
  const images = document.querySelectorAll('img[src*="svg"]');
  images.forEach((img, index) => {
    const svgContent = decodeUrlEncodedSVG(img.src);
    if (svgContent) {
      svgData.push({
        id: generateFileName(img, "url-encoded", index),
        type: "url-encoded",
        source: img.src,
        rawSvg: svgContent,
        dimensions: {
          width: img.width,
          height: img.height,
        },
        location: `Image in ${img.closest("[id]")?.id || "unknown"} element`,
      });
    }
  });
}

function captureCanvasSVGs() {
  const canvases = document.querySelectorAll("canvas");
  canvases.forEach((canvas, index) => {
    const operation = canvasOperations.get(canvas.id);
    if (operation) {
      svgData.push({
        id: generateFileName(canvas, "canvas", index),
        type: "canvas",
        source: operation.sourceImage,
        dimensions: {
          width: canvas.width,
          height: canvas.height,
        },
        location: `Canvas ID: ${canvas.id}`,
      });
    }
  });
}

function captureRegularSVGs() {
  const svgs = document.querySelectorAll("svg");
  svgs.forEach((svg, index) => {
    const svgContent = new XMLSerializer().serializeToString(svg);
    svgData.push({
      id: generateFileName(svg, "svg", index),
      type: "regular",
      source: "data:image/svg+xml;base64," + btoa(svgContent),
      rawSvg: svgContent,
      dimensions: {
        width: svg.width.baseVal.value || svg.viewBox.baseVal.width,
        height: svg.height.baseVal.value || svg.viewBox.baseVal.height,
      },
      location: `In ${svg.closest("[id]")?.id || "unknown"} element`,
    });
  });
}

function captureBlobSVGs() {
  const images = document.querySelectorAll('img[src^="blob:"]');
  images.forEach(async (img, index) => {
    try {
      const response = await fetch(img.src);
      const blob = await response.blob();

      if (blob.type === "image/svg+xml") {
        const text = await blob.text();
        const width = img.width || 0;
        const height = img.height || 0;

        svgData.push({
          id: generateFileName(img, "blob", index),
          type: "blob",
          source: img.src,
          rawSvg: text,
          dimensions: {
            width: width,
            height: height,
          },
          location: `Image in ${img.closest("[id]")?.id || "unknown"} element`,
        });
      }
    } catch (e) {
      console.error("Error processing blob SVG:", e);
    }
  });
}

// Wrap the initialization and message handling in an IIFE (Immediately Invoked Function Expression)
(function () {
  // Initialize canvas operation interception
  interceptCanvasOperations();

  // Initialize SVG capture
  function init() {
    svgData = [];
    captureUrlEncodedSVGs();
    captureRegularSVGs();
    captureCanvasSVGs();
    captureBlobSVGs();
  }

  // Initial capture
  init();

  // Set up mutation observer
  const observer = new MutationObserver(() => {
    init();
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["src", "style"],
  });

  // Set up message handling
  if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "getSVGs") {
        // Refresh SVG data
        init();

        // Handle async blob processing
        const blobPromises = Array.from(document.querySelectorAll('img[src^="blob:"]')).map((img) =>
          fetch(img.src)
            .then((response) => response.blob())
            .catch(() => null)
        );

        Promise.all(blobPromises)
          .then(() => {
            sendResponse({ svgs: svgData });
          })
          .catch((error) => {
            console.error("Error processing blobs:", error);
            sendResponse({ svgs: svgData });
          });

        return true; // Keep the message channel open for async response
      }

      if (request.action === "downloadAllAsZip") {
        init();
        downloadAllAsZip().catch(console.error);
        return false; // No async response needed
      }
    });
  }
})();

async function downloadAllAsZip() {
  try {
    const zip = new JSZip();
    const svgFolder = zip.folder("svgs");

    // Process all SVGs
    await Promise.all(
      svgData.map(async (svg) => {
        try {
          let content;
          if (svg.rawSvg) {
            content = svg.rawSvg;
          } else if (svg.source.startsWith("data:image/svg+xml,")) {
            content = decodeURIComponent(svg.source.split("data:image/svg+xml,")[1]);
          } else if (svg.source.startsWith("data:image/svg+xml;base64,")) {
            content = atob(svg.source.split(",")[1]);
          } else if (svg.source.startsWith("blob:")) {
            const response = await fetch(svg.source);
            content = await response.text();
          } else {
            content = svg.source;
          }

          if (content) {
            svgFolder.file(`${svg.id}.svg`, content);
          }
        } catch (error) {
          console.error(`Error processing SVG ${svg.id}:`, error);
        }
      })
    );

    // Generate and download the zip
    const blob = await zip.generateAsync({
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: { level: 9 },
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `svg-collection-${new Date().toISOString().slice(0, 10)}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error creating zip:", error);
    throw error; // Re-throw to be caught by the caller
  }
}
