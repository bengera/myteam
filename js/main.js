const hamMenu = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const navPrimary = document.querySelector('.nav-primary');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    overlay.classList.toggle('show');
    navPrimary.classList.toggle('show');
})