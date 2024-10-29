document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getSVGs" }, (response) => {
      if (response && response.svgs) {
        displaySVGs(response.svgs);
      }
    });
  });
});

let currentSvgCount = 0;

function displaySVGs(svgs) {
  const container = document.getElementById("svgList");
  currentSvgCount = svgs.length;

  if (svgs.length === 0) {
    container.innerHTML = '<div class="no-svgs">No SVGs found on this page</div>';
    document.getElementById("downloadAll").style.display = "none";
    return;
  }

  document.getElementById("downloadAll").style.display = "block";
  container.innerHTML = ""; // Clear existing content

  svgs.forEach((svg, index) => {
    const item = document.createElement("div");
    item.className = "svg-item";

    // Create preview
    const preview = document.createElement("img");
    preview.className = "svg-preview";
    preview.src = svg.source;

    // Create info container
    const info = document.createElement("div");
    info.className = "svg-info";

    // Add type and dimensions
    const mainInfo = document.createElement("div");
    mainInfo.textContent = `${svg.type} SVG (${svg.dimensions.width}x${svg.dimensions.height})`;

    // Add filename info
    const filenameInfo = document.createElement("div");
    filenameInfo.className = "filename-info";
    filenameInfo.textContent = `${svg.id}.svg`;

    // Add location info
    const locationInfo = document.createElement("div");
    locationInfo.className = "source-info";
    locationInfo.textContent = svg.location;

    info.appendChild(mainInfo);
    info.appendChild(filenameInfo);
    info.appendChild(locationInfo);

    // Create download button
    const downloadBtn = document.createElement("button");
    downloadBtn.className = "download-btn";
    downloadBtn.textContent = "Download";
    downloadBtn.onclick = () => downloadSVG(svg, index);

    item.appendChild(preview);
    item.appendChild(info);
    item.appendChild(downloadBtn);
    container.appendChild(item);
  });
}

function downloadSVG(svg, index) {
  let content;
  let filename = `svg-${index}.svg`;

  if (svg.rawSvg) {
    content = svg.rawSvg;
  } else if (svg.source.startsWith("data:image/svg+xml,")) {
    content = decodeURIComponent(svg.source.split("data:image/svg+xml,")[1]);
  } else if (svg.source.startsWith("data:image/svg+xml;base64,")) {
    content = atob(svg.source.split(",")[1]);
  } else {
    content = svg.source;
  }

  const blob = new Blob([content], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  chrome.downloads.download({
    url: url,
    filename: filename,
  });
}

document.getElementById("downloadAll").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // First refresh the SVG list
    chrome.tabs.sendMessage(tabs[0].id, { action: "getSVGs" }, (response) => {
      if (response && response.svgs) {
        // Then trigger the download
        chrome.tabs.sendMessage(tabs[0].id, { action: "downloadAllAsZip" });
      }
    });
  });
});
