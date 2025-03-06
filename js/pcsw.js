var swiper = new Swiper(".mySwiperProd", {
    spaceBetween: 5,
    slidesPerView: 3.5,

    breakpoints: {

        479: {
            loop: true,
            spaceBetween: 11,
            slidesPerView: 5.5,
            freeMode: true,
            watchSlidesProgress: true,
        },
        767: {
            loop: true,
            spaceBetween: 11,
            slidesPerView: 8.5,
            freeMode: true,
            watchSlidesProgress: true,
        },
    },
});
var swiper2 = new Swiper(".mySwiperProd2", {
    slidesPerView: 1.12,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
        nextEl: ".mySwiperProd2-btn-next",
        prevEl: ".mySwiperProd2-btn-prev",
    },
    thumbs: {
        swiper: swiper,
    },

    breakpoints: {

        479: {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 10,
        }

    },
});


