document.addEventListener('DOMContentLoaded', () => {
  const btnOpenSort = document.querySelector('.sort__mobile-btn');
  const sortBackdrop = document.querySelector('.sort-backdrop');
  const sortBtns = document.querySelectorAll('.sort-modal__btn');

  if (btnOpenSort && sortBackdrop) {
    const toggleSortModal = () => {
      sortBackdrop.classList.toggle('is-hidden');
      document.body.classList.toggle('is-scroll-disabled');
    };
    btnOpenSort.addEventListener('click', toggleSortModal);

    sortBackdrop.addEventListener('click', e => {
      if (e.target === sortBackdrop) {
        toggleSortModal();
      }
    });

    sortBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const currentActive = document.querySelector(
          '.sort-modal__btn--active',
        );
        if (currentActive) {
          currentActive.classList.remove('sort-modal__btn--active');
        }
        btn.classList.add('sort-modal__btn--active');

        toggleSortModal();
      });
    });
  }
});
