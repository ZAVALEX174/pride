const heroSlider = new Swiper('.hero-swiper', {
        loop: true,
        speed: 1500,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: false,
            clickable: true,
        },
        navigation: {
            nextEl: '.btn__slider_next',
            prevEl: '.btn__slider_prev',
        },
    }
);

