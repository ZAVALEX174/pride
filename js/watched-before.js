var watchedBeforeSwiper = new Swiper(".watched-before-swiper", {
    // slidesPerView: 2.8,
    slidesPerView: "auto",
    // loop: true,
    spaceBetween: 24,
    freeMode: true,
    navigation: {
        nextEl: '.watched-before-next__btn',
        prevEl: '.watched-before-prev__btn',
    },
});


var watchedBeforeSwiperCatalog = new Swiper(".watched-before__catalog-swiper", {
    // slidesPerView: 2.8,
    slidesPerView: "auto",
    // loop: true,
    spaceBetween: 17,
    freeMode: true,
    navigation: {
        nextEl: '.watched-before__catalog-cart-btn_next',
        prevEl: '.watched-before__catalog-cart-btn_prev',
    },
});
