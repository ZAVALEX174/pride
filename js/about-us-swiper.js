const specialists = document.querySelector('.mySwiperSpecialists');

if (specialists) {
    var mySwiperSpecialists = new Swiper(".mySwiperSpecialists", {
        slidesPerView: 1.01,
        spaceBetween: 14,
        speed: 500,
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
}

const dubleSwiperOne = document.querySelector('.mySwiper');
const dubleSwiperTwo = document.querySelector('.mySwiper2');

if (dubleSwiperOne && dubleSwiperTwo) {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.5,
        centeredSlides: true,
        speed: 5000,
        direction: "vertical",
        spaceBetween: 40,
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

    });

    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1.32,
        spaceBetween: 22,
        speed: 5000,
        direction: "horizontal",
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: false,
            pauseOnMouseEnter: true,
        },

        breakpoints: {

            390: {
                slidesPerView: 1.5,
                spaceBetween: 22,
                speed: 5000,
                direction: "horizontal",
                loop: true,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: true,
                },
            },
            468: {
                slidesPerView: 1.8,
                spaceBetween: 22,
                speed: 5000,
                direction: "horizontal",
                loop: true,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: true,
                },
            },
            680: {
                slidesPerView: 2.5,
                spaceBetween: 22,
                speed: 5000,
                direction: "horizontal",
                loop: true,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: true,
                },
            },
            769: {
                slidesPerView: 1.5,
                spaceBetween: 40,
                speed: 5000,
                direction: "vertical",
                autoplay: {
                    delay: 1,
                    disableOnInteraction: false,
                    reverseDirection: true,
                    pauseOnMouseEnter: true,
                },
            }
        },
    });

}