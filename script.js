document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("image-container");

    // Replace 'your-image-folder/' with the path to your image folder
    const imageFolder = "img/";

    // Use the fetch API to fetch the list of image files in the folder
    fetch(imageFolder)
        .then((response) => response.text())
        .then((data) => {
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(data, "text/html");
            const imageFiles = htmlDocument.links;

            // Loop through the image files and create image elements
            for (const file of imageFiles) {
                if (file.href.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
                    const img = document.createElement("img");
                    img.src = file.href;
                    imageContainer.appendChild(img);
                }
            }
        })
        .catch((error) => {
            console.error("Error loading images: ", error);
        });
});
