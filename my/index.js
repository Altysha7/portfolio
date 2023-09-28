

const burgerBtn = document.querySelector('.burger-icon');
const headerNav = document.querySelector('.header__nav');


burgerBtn.addEventListener('click', () => {
    headerNav.classList.toggle("hidden");
});