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
        svgData.push({
          id: generateFileName(img, "blob", index),
          type: "blob",
          source: img.src,
          rawSvg: text,
          dimensions: {
            width: img.width,
            height: img.height,
          },
          location: `Image in ${img.closest("[id]")?.id || "unknown"} element`,
        });
      }
    } catch (e) {
      console.error("Error processing blob SVG:", e);
    }
  });
}

function init() {
  svgData = [];
  captureUrlEncodedSVGs();
  captureRegularSVGs();
  captureCanvasSVGs();
  captureBlobSVGs();

  // Listen for messages from popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getSVGs") {
      // Since blob processing is asynchronous, wait a short time before responding
      setTimeout(() => {
        sendResponse({ svgs: svgData });
      }, 100);
      return true; // Required for async response
    } else if (request.action === "downloadAllAsZip") {
      downloadAllAsZip();
      return true;
    }
  });
}

// Initialize canvas operation interception
interceptCanvasOperations();

// Initialize when the page loads
init();

// Watch for dynamic changes
const observer = new MutationObserver(() => {
  init();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["src", "style"],
});

async function downloadAllAsZip() {
  const zip = new JSZip();

  // Create a folder for the SVGs
  const svgFolder = zip.folder("svgs");

  svgData.forEach((svg, index) => {
    let content, filename;

    // Get content based on SVG type
    if (svg.rawSvg) {
      content = svg.rawSvg;
    } else if (svg.source.startsWith("data:image/svg+xml,")) {
      content = decodeURIComponent(svg.source.split("data:image/svg+xml,")[1]);
    } else if (svg.source.startsWith("data:image/svg+xml;base64,")) {
      content = atob(svg.source.split(",")[1]);
    } else {
      content = svg.source;
    }

    // Generate filename
    filename = `${svg.id}.svg`;

    // Add to zip if we have content
    if (content) {
      svgFolder.file(filename, content);
    }
  });

  try {
    // Generate zip with compression
    const blob = await zip.generateAsync({
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: {
        level: 9,
      },
    });

    // Create download URL and trigger download
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
  }
}
