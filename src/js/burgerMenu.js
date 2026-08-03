function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function preventTouchScroll(e) {
  const burgerMenu = document.querySelector('.burger');
  if (burgerMenu && burgerMenu.contains(e.target)) {
    return;
  }
  e.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
  const openBtnEl = document.querySelector('[data-action="open"]');
  const closeBtnEl = document.querySelector('[data-action="close"]');
  const burgerEl = document.querySelector('.burger');
  const navLinks = document.querySelectorAll('[data-menu-link]');
  const body = document.body;
  const mainEl = document.querySelector('main');
  const footerEl = document.querySelector('footer');
  const headerEl = document.querySelector('.header');

  if (!openBtnEl || !burgerEl) return;

  openBtnEl.addEventListener('click', () => {
    const scrollbarWidth = getScrollbarWidth();
    const shouldCompensateScroll =
      window.innerWidth > 375 && scrollbarWidth > 0;

    if (shouldCompensateScroll) {
      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${scrollbarWidth}px`
      );
    } else {
      document.documentElement.style.setProperty('--scrollbar-width', '0px');
    }

    burgerEl.setAttribute('data-visible', 'open');
    body.setAttribute('data-scroll', 'locked');

    if (shouldCompensateScroll) {
      const offset = `-${scrollbarWidth}px`;
      if (mainEl) mainEl.style.marginRight = offset;
      if (footerEl) footerEl.style.marginRight = offset;
      if (headerEl) headerEl.style.marginRight = offset;
    }

    window.addEventListener('touchmove', preventTouchScroll, {
      passive: false,
    });
  });

  if (closeBtnEl) {
    closeBtnEl.addEventListener('click', closeMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    burgerEl.setAttribute('data-visible', 'close');
    body.removeAttribute('data-scroll');
    document.documentElement.style.removeProperty('--scrollbar-width');

    if (mainEl) mainEl.style.marginRight = '';
    if (footerEl) footerEl.style.marginRight = '';
    if (headerEl) headerEl.style.marginRight = '';

    window.removeEventListener('touchmove', preventTouchScroll);
  }
});
