
var otherSwiper = new Swiper(".other__body-list", {
  slidesPerView: "auto",
  // centeredSlides: true,
  loop: true,
  spaceBetween: 24,
  grabCursor: true,
  navigation: {
    nextEl: '.other-next__btn',
    prevEl: '.other-prev__btn',
  },
});
var otherSwiperCatalog = new Swiper(".swiper-filter-on__body-swiper", {
  slidesPerView: "auto",
  // centeredSlides: true,
  loop: true,
  spaceBetween: 24,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-filter-on-btn_next',
    prevEl: '.swiper-filter-on-btn_prev',
  },
});