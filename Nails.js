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

document.addEventListener('DOMContentLoaded', function () {
    // Function to handle the booking process
    function bookNow(serviceName) {
        alert('Booking now for ' + serviceName + '!');
    }

    // Adding event listeners for each "Book Now" button
    document.getElementById('manicure').querySelector('button').addEventListener('click', function () {
        bookNow('Manicure');
    });

    document.getElementById('pedicure').querySelector('button').addEventListener('click', function () {
        bookNow('Pedicure');
    });

    document.getElementById('nail-art').querySelector('button').addEventListener('click', function () {
        bookNow('Nail Art');
    });
});
