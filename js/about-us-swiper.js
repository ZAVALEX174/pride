var mySwiperSpecialists = new Swiper(".mySwiperSpecialists", {
    slidesPerView: 1.2,
    spaceBetween: 14,
    speed: 500,
    // loop: true,
    // grabCursor: true,
    navigation: {
        nextEl: '.mySwiperSpecialists__next',
        prevEl: '.mySwiperSpecialists__prev',
    },
    breakpoints: {

        640: {
            slidesPerView: "auto",
            spaceBetween: 20,
        }

    },
});