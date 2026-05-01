document.addEventListener('DOMContentLoaded', () => {
  const btnMoreServices = document.querySelector('.services__btn-more');
  const extraServices = document.querySelectorAll('.services__item--extra');

  if (btnMoreServices && extraServices.length > 0) {
    btnMoreServices.addEventListener('click', () => {
      const isExpanded =
        btnMoreServices.getAttribute('aria-expanded') === 'true';

      extraServices.forEach(item => {
        item.classList.toggle('is-hidden');
      });

      btnMoreServices.setAttribute('aria-expanded', !isExpanded);

      if (!isExpanded) {
        btnMoreServices.innerHTML = `<svg class="services__link-icon" width="24" height="12" style="transform: rotate(180deg);"><use href="./images/sprite.svg#icon-arrow-long"></use></svg> less services`;
      } else {
        btnMoreServices.innerHTML = `more services <svg class="services__link-icon" width="24" height="12"><use href="./images/sprite.svg#icon-arrow-long"></use></svg>`;
      }
    });
  }
});
