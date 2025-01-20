
var ourProductsSwiper = new Swiper(".our-projects-swiper", {
  slidesPerView: 1.1,
  speed: 500,
  centeredSlides: true,
  // loop: true,
  spaceBetween: 14,
  grabCursor: true,
  navigation: {
    nextEl: '.our-projects-next__btn',
    prevEl: '.our-projects-prev__btn',
  },
  breakpoints: {

    640: {
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: false,
    }

  },
});