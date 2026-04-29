const swiper = new Swiper('.testimonials__slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'slider__dot',
    bulletActiveClass: 'slider__dot--active',
  },

  navigation: {
    nextEl: '.slider__btn--next',
    prevEl: '.slider__btn--prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
