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
