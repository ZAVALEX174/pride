var swiper = new Swiper(".mySwiperProd", {
  loop: true,
  spaceBetween: 11,
  slidesPerView: 8.5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiperProd2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".mySwiperProd2-btn-next",
    prevEl: ".mySwiperProd2-btn-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});