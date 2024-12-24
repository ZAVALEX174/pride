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
    loop: false,
    spaceBetween: 20,
    slidesPerView: "auto",
    // slidesPerView: 3.5,
    navigation: {
        nextEl: '.categories__body-swiper-btn-next',
        prevEl: '.categories__body-swiper-btn-prev',
    },
}
);

const workSlider = new Swiper('.work__body-swiper-content-slider', {
    loop: false,
    spaceBetween: 20,
    slidesPerView: "auto",
    // slidesPerView: 3.5,
    navigation: {
        nextEl: '.work__body-swiper-btn-next',
        prevEl: '.work__body-swiper-btn-prev',
    },
}
);