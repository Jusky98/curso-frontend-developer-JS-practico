const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
navEmail.addEventListener('click', toogleMenu);

function toogleMenu(){
        desktopMenu.classList.toggle('inactive')
}