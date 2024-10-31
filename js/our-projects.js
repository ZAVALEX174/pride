
var ourProductsSwiper = new Swiper(".our-projects-swiper", {
  slidesPerView: "auto",
  // centeredSlides: true,
  loop: true,
  spaceBetween: 24,
  grabCursor: true,
  navigation: {
    nextEl: '.our-projects-next__btn',
    prevEl: '.our-projects-prev__btn',
  },
});