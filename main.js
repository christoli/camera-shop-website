let menuIcon = document.getElementById('menuToggle');
let menu = document.querySelector('nav .container ul');

// Show & hide menu
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-display');
});