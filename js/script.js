const headerContainer = document.querySelector('.header .container');
const hamburger = document.querySelector('.header__hamburger');
const close = document.querySelector('.header__close');
const nav = document.querySelector('.nav');
const intro = document.querySelector('.intro');

const toggleMenu = () => {
    hamburger.classList.toggle("header__hamburger--hidden");
    close.classList.toggle("header__close--active");
    nav.classList.toggle("nav--active");
    intro.classList.toggle("intro--overlay");
    headerContainer.classList.toggle("header-container--mobile");
}

hamburger.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);

