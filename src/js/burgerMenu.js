const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const navLinks = document.querySelectorAll('[data-menu-link]');
const body = document.querySelector('body');

openBtnEl.addEventListener('click', () => {
  burgerMenuEl.dataset.visible = 'open';
  body.dataset.scroll = 'locked';
});

closeBtnEl.addEventListener('click', closeMenu);

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  burgerMenuEl.dataset.visible = 'close';
  delete body.dataset.scroll;
}
