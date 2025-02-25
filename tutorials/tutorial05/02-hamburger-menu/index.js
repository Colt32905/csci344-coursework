// Your code here.
function toggleMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
}