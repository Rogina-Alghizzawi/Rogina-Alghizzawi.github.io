const rotatingImages = [
    'image/home1.jpg',
    'image/home2.jpg',
    'image/home3.jpg',
    // Add more image paths as needed
];

let currentImageIndex = 0;
const rotatingImageElement = document.getElementById('rotating-image');

function rotateImages() {
    rotatingImageElement.src = rotatingImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % rotatingImages.length;
    setTimeout(rotateImages, 5000); // Change image every 5 seconds (adjust as needed)
}

document.addEventListener('DOMContentLoaded', rotateImages); // Start rotating images after DOM load

function openMenu() {
    var sideMenu = document.getElementById("side-menu");
    sideMenu.style.width = "250px";
}

function closeMenu() {
    var sideMenu = document.getElementById("side-menu");
    sideMenu.style.width = "0";
}

function toggleMenu() {
    var sideMenu = document.getElementById("side-menu");
    sideMenu.style.width = sideMenu.style.width === "250px" ? "0" : "250px";
}