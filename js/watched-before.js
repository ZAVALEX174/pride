// catalog.html
var watchedBeforeSwiper = new Swiper(".watched-before-swiper", {
     slidesPerView: "1.05",
    centeredSlides: true,
    speed: 500,
    spaceBetween: 14,
    grabCursor: true,
    navigation: {
        nextEl: '.watched-before-next__btn',
        prevEl: '.watched-before-prev__btn',
    },
    breakpoints: {
        640: {
            slidesPerView: "auto",
            spaceBetween: 20,
            centeredSlides: false,
        }
    },
});

