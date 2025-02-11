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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.8,
    centeredSlides: true,
    speed: 300,
    direction: "vertical",
    spaceBetween: 40,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1.8,
    spaceBetween: 40,
    speed: 500,
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        reverseDirection: true,
        pauseOnMouseEnter: true,
    },
});

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