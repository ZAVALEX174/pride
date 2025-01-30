var otherSwiper = new Swiper(".other__body-list", {
    slidesPerView: 1.05,
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
    slidesPerView: 1.05,
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

var swiperNews = new Swiper(".swiper-news", {
    slidesPerView: 1.05,
    spaceBetween: 14,
    centeredSlides: true,
    speed: 500,
    breakpoints: {
        500: {
            slidesPerView: 1.5,
            spaceBetween: 14,
            centeredSlides: false,
        },
        600: {
            slidesPerView: 1.8,
            spaceBetween: 14,
            centeredSlides: false,
        },
        900: {
            slidesPerView: 2.1,
            spaceBetween: 14,
            centeredSlides: false,
        },
        1100: {
            slidesPerView: 2.5,
            spaceBetween: 20,
            centeredSlides: false,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
        }

    },
});
