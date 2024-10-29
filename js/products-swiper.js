var productsSwiper = new Swiper(".products-swiper", {
    slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 17,
    grabCursor: true,
    navigation: {
        nextEl: '.products-swiper_next',
        prevEl: '.products-swiper_prev',
    },

});

var productsSwiperBefore = new Swiper(".watched-before__product-cart-swiper", {
    slidesPerView: "auto",
    spaceBetween: 17,
    grabCursor: true,
    navigation: {
        nextEl: '.watched-before__product-cart-btn_next',
        prevEl: '.watched-before__product-cart-btn_prev',
    },
});