const hamMenu = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const navPrimary = document.querySelector('.nav-primary');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    overlay.classList.toggle('show');
    navPrimary.classList.toggle('show');
    

    if (hamMenu.classList.contains('active')) {
        console.log('menu-open');
        document.body.style.overflowY = 'hidden';
    } else {
        overlay.classList.toggle('active');
        document.body.style.overflowY = 'visible';
    }
});

function resetMenu() {
    console.log('reset');
    document.body.setAttribute("style", "position:static");
    overlay.setAttribute("style", "display:none");
    hamMenu.classList.toggle('active');
    navPrimary.classList.remove('show');


}

(function () {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;

        if (myWidth >= 600) {
            if (hamMenu.classList.contains('active')) {
                resetMenu();
            }
            
        } 

    }
})();
