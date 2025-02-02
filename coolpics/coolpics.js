function toggleMenu() {
    console.log("clickedButton");
    const dropDown = document.getElementById("drop-down");
    dropDown.classList.toggle("open");
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function viewHandler(event) {
    // Ensure the click is on an image inside the gallery
    console.log("Image clicked");
    if (event.target.tagName === "IMG") {
        const clickedImage = event.target;

        // Get the src attribute of the clicked image
        const imgSrc = clickedImage.getAttribute("src");
        console.log("Original image src:", imgSrc);

        // Use the original image source for the viewer
        const fullImgSrc = imgSrc;  // No change, using the same image for the modal

        // Get the alt text from the clicked image
        const altText = clickedImage.getAttribute("alt");

        // Insert the viewer template into the body
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImgSrc, altText));

        // Add listener to close button
        const viewer = document.querySelector(".viewer");
        viewer.addEventListener("click", closeViewer);
    }
}

document.querySelector(".gallery").addEventListener("click", viewHandler);

function closeViewer(event) {
    // Check if the click is on the viewer or close button
    console.log("Viewer closed");
    if (event.target.classList.contains("viewer") || event.target.classList.contains("close-viewer")) {
        document.querySelector(".viewer").remove();
    }
}