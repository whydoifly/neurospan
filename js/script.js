// Функционал бургер-меню
let burgerImg = document.querySelector('.mobile-burger-img');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuLinks = document.querySelectorAll('.mobile-menu__link_a');
let docBody = document.querySelector('body');

burgerImg.addEventListener('click', () => {
    if (mobileMenu.style.display !== 'block') {
        mobileMenu.style.display = 'block';
        burgerImg.src = '/img/icons/burger-cross.svg';
        docBody.style.overflow = 'hidden';
    } else {
        mobileMenu.style.display = 'none';
        burgerImg.src = '/img/icons/burger.svg';
        docBody.style.overflow = 'visible';
    }
});

for (let link of mobileMenuLinks) {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        burgerImg.src = '/img/icons/burger.svg';
        docBody.style.overflow = 'visible';
    })
}