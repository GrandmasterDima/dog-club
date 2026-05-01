document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuBtnOpen = document.querySelector('.menu-btn-open');
  const menuBtnClose = document.querySelector('.menu-btn-close');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('is-scroll-disabled');
  };

  if (menuBtnOpen) menuBtnOpen.addEventListener('click', toggleMenu);
  if (menuBtnClose) menuBtnClose.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('is-scroll-disabled');
    });
  });
});
