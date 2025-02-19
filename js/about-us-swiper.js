const specialists = document.querySelector('.mySwiperSpecialists');

if (specialists) {
    var mySwiperSpecialists = new Swiper(".mySwiperSpecialists", {
        slidesPerView: 1.01,
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
}

const dubleSwiperOne = document.querySelector('.mySwiper');
const dubleSwiperTwo = document.querySelector('.mySwiper2');

if (dubleSwiperOne && dubleSwiperTwo) {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.574,
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
                slidesPerView: 1.574,
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

// document.addEventListener("DOMContentLoaded", function () {
//     const sliderOne = document.querySelector('.slider-one');
//     const sliderTwo = document.querySelector('.slider-two');
//     let isPausedOne = false;
//     let isPausedTwo = false;
//     let interval;
//
//     console.log(sliderOne, sliderTwo);
//
//     function startSliderOne() {
//         interval = setInterval(() => {
//             if (!isPausedOne) {
//                 const firstSlide = sliderOne.firstElementChild;
//                 sliderOne.style.transition = 'transform 0.5s ease-in-out';
//                 sliderOne.style.transform = `translateY(-${firstSlide.offsetHeight}px)`;
//
//                 setTimeout(() => {
//                     sliderOne.style.transition = 'none';
//                     sliderOne.appendChild(firstSlide);
//                     sliderOne.style.transform = 'translateY(0)';
//                 }, 500);
//             }
//         }, 2000); // Интервал между слайдами (2 секунды)
//     }
//
// // Остановка слайдера при наведении
//     sliderOne.addEventListener('mouseenter', () => {
//         isPaused = true;
//     });
//
// // Возобновление слайдера при уходе курсора
//     sliderOne.addEventListener('mouseleave', () => {
//         isPaused = false;
//     });
//
//
//     function startSliderTwo() {
//         interval = setInterval(() => {
//             if (!isPausedTwo) {
//                 const firstSlide = sliderTwo.firstElementChild;
//                 sliderTwo.style.transition = 'transform 0.5s ease-in-out';
//                 sliderTwo.style.transform = `translateY(${firstSlide.offsetHeight}px)`;
//
//                 setTimeout(() => {
//                     sliderTwo.style.transition = 'none';
//                     sliderTwo.appendChild(firstSlide);
//                     sliderTwo.style.transform = 'translateY(0)';
//                 }, 500);
//             }
//         }, 2000); // Интервал между слайдами (2 секунды)
//     }
//
// // Остановка слайдера при наведении
//     sliderTwo.addEventListener('mouseenter', () => {
//         isPaused = true;
//     });
//
// // Возобновление слайдера при уходе курсора
//     sliderTwo.addEventListener('mouseleave', () => {
//         isPaused = false;
//     });
//
// // Запуск слайдера
//     startSliderOne();
//     // startSliderTwo();
// });