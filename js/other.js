
var otherSwiper = new Swiper(".other__body-list", {
  slidesPerView: 1.1,
  speed: 500,
  centeredSlides: true,
  // loop: true,
  spaceBetween: 14,
  grabCursor: true,
  navigation: {
    nextEl: '.other-next__btn',
    prevEl: '.other-prev__btn',
  },
  breakpoints: {

    640: {
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: false,
    }

  },
});

var otherSwiperCatalog = new Swiper(".swiper-filter-on__body-swiper", {
  slidesPerView: "auto",
  // centeredSlides: true,
  speed: 500,
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-filter-on-btn_next',
    prevEl: '.swiper-filter-on-btn_prev',
  },
});

var watchedBeforeSwiperCatalog = new Swiper(".watched-before__catalog-swiper", {
  slidesPerView: 1.1,
  spaceBetween: 14,
  centeredSlides: true,
  speed: 500,
  navigation: {
    nextEl: '.watched-before__catalog-cart-btn_next',
    prevEl: '.watched-before__catalog-cart-btn_prev',
  },
  breakpoints: {

    640: {
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: false,
    }

  },
});