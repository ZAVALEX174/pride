// для всех слайдеров
var watchedBeforeSwiper = new Swiper(".watched-before-swiper", {
    // slidesPerView: 2.8,
    slidesPerView: "auto",
    // initialSlide: 2,
    // centeredSlides: true,
    speed: 1500,
    // loop: true,
    spaceBetween: 24,
    // freeMode: true,
    // grabCursor: true,
    navigation: {
        nextEl: '.watched-before-next__btn',
        prevEl: '.watched-before-prev__btn',
    },
});

// работает только управление кнопками, все остальное выше
var watchedBeforeSwiperCatalog = new Swiper(".watched-before__catalog-swiper", {
    // slidesPerView: 2.8,
    slidesPerView: "auto",
    // initialSlide: 2,
    // centeredSlides: true,
    speed: 1500,
    // loop: true,
    // grabCursor: true,
    spaceBetween: 17,
    // freeMode: true,
    navigation: {
        nextEl: '.watched-before__catalog-cart-btn_next',
        prevEl: '.watched-before__catalog-cart-btn_prev',
    },
});
