(() => {
const refs = {
    openMenuBtn: document.querySelectorAll('[data-menu-open]'),
    closeMenuBtn: document.querySelectorAll('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
};
refs.openMenuBtn.forEach(element => {
    element.addEventListener('click', toggleMenu);
});
refs.closeMenuBtn.forEach(element => {
    element.addEventListener('click', toggleMenu);
});
function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
}
})();