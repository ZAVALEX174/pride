var swiper = new Swiper(".news-d-swiper", {
    cssMode: true,
    slidesPerView: 1.13,
    spaceBetween: 7,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,

    breakpoints: {
        640: {
            slidesPerView: "auto",
            spaceBetween: 20,
        }
    },
});


// для всех слайдеров
var watchedBeforeSwiper = new Swiper(".other-news-swiper", {
    slidesPerView: 1.05,
    spaceBetween: 14,
    navigation: {
        nextEl: '.other-news-swiper__btn-next',
        prevEl: '.other-news-swiper__btn-prev',
    },

    breakpoints: {
        424: {
            slidesPerView: "auto",
            spaceBetween: 20,
            speed: 1500,
        }
    },
});



