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

const categoriesSlider = new Swiper('.categories__body-swiper-content-slider', {
        slidesPerView: 1.05,
        speed: 500,
        centeredSlides: true,
        // loop: true,
        spaceBetween: 14,
        grabCursor: true,
    navigation: {
        nextEl: '.categories__body-swiper-btn-next',
        prevEl: '.categories__body-swiper-btn-prev',
    },
        breakpoints: {
            478: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                centeredSlides: false,
            },
            640: {
                slidesPerView: "auto",
                spaceBetween: 20,
                centeredSlides: false,
            }

        },
}
);

const workSlider = new Swiper('.work__body-swiper-content-slider', {
        slidesPerView: 1.05,
        speed: 500,
        centeredSlides: true,
        // loop: true,
        spaceBetween: 14,
        grabCursor: true,
    navigation: {
        nextEl: '.work__body-swiper-btn-next',
        prevEl: '.work__body-swiper-btn-prev',
    },
        breakpoints: {

            640: {
                slidesPerView: "auto",
                spaceBetween: 20,
                centeredSlides: false,
            }

        },
}
);