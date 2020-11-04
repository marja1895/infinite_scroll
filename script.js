const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];


const count = 10;
const apiKey = 'QQ6qZDeWeQv7VaG9dgMYFH8pr6W9-nLCTKswe5EJ660';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Crate elements for links and photos? add to DOM
function displayPhotos() {
    //  Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

async function getPhotos() {
    try {
    const response = await fetch(apiUrl);
    const photosArray = await response.json();
    displayPhotos();
 } catch (error) {
    // catching error
}
}
// on Load

getPhotos();