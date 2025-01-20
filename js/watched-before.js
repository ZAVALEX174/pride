// для всех слайдеров
var watchedBeforeSwiper = new Swiper(".watched-before-swiper", {
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
        nextEl: '.watched-before-next__btn',
        prevEl: '.watched-before-prev__btn',
    },
    // breakpoints: {
    //
    //     640: {
    //         slidesPerView: "auto",
    //         spaceBetween: 20,
    //         centeredSlides: false,
    //     }
    //
    // },
});

// работает только управление кнопками, все остальное выше

