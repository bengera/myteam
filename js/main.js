const hamMenu = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const navPrimary = document.querySelector('.nav-primary');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    overlay.classList.toggle('show');
    navPrimary.classList.toggle('show');
    

    if (hamMenu.classList.contains('active')) {
        console.log('menu-open');
        // document.body.setAttribute("style", "position:fixed");
        document.body.style.overflowY = 'hidden';
    } else {
        overlay.classList.toggle('active');
        // document.body.setAttribute("style", "position:static");
        document.body.style.overflowY = 'visible';
    }
});

