document.addEventListener("DOMContentLoaded", function () {
    // Define an array of image sources
    const imageSources = [
     
        "image/massage2.jpg", 
        "image/massage3.jpg",
    ];

    // Get the cover image element
    const coverImage = document.getElementById("cover");

    // Set an interval to rotate the cover image every 5 seconds
    let currentImageIndex = 0;
    setInterval(function () {
        coverImage.src = imageSources[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    }, 5000); // Change the rotation time (in milliseconds) 
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the booking process
    function bookNow(serviceName) {
    
        alert('Booking now for ' + serviceName + '!');
    }

    // Adding event listeners for each "Book Now" button
    document.getElementById('container3').querySelector('button').addEventListener('click', function () {
        bookNow('Deep Tissue Massage');
    });

    document.getElementById('container2').querySelector('button').addEventListener('click', function () {
        bookNow('Aromatherapy Massage');
    });

    document.getElementById('container1').querySelector('button').addEventListener('click', function () {
        bookNow('Swedish Massage');
    });
});




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