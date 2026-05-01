const modal = document.querySelector('.backdrop');
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleModal = () => {
  modal.classList.toggle('is-hidden');

  if (!modal.classList.contains('is-hidden')) {
    document.body.classList.add('is-scroll-disabled');
    mobileMenu.classList.remove('is-open');
  } else {
    document.body.classList.remove('is-scroll-disabled');
  }
};
modalBtnsOpen.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});
modalBtnClose.addEventListener('click', toggleModal);
