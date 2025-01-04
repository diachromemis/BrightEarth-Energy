// JavaScript to add interactivity to the website

// Function to toggle a mobile menu
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}

// Adding event listener for a button
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }
});
