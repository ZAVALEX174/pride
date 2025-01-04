var swiper = new Swiper(".news-d-swiper", {
  cssMode: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


// для всех слайдеров
var watchedBeforeSwiper = new Swiper(".other-news-swiper", {
  // slidesPerView: 2.8,
  slidesPerView: "auto",
  // initialSlide: 2,
  // centeredSlides: true,
  speed: 1500,
  // loop: true,
  spaceBetween: 20,
  // freeMode: true,
  // grabCursor: true,
  navigation: {
    nextEl: '.other-news-swiper__btn-next',
    prevEl: '.other-news-swiper__btn-prev',
  },
});



