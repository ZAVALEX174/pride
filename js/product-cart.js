// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 0,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 0,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });

document.addEventListener('DOMContentLoaded', () => {

    let mySwiper = new Swiper('.slider-block', {
        slidesPerView: 1,
    })

    let mySwiper2 = new Swiper('.card-slider__nav', {
        slidesPerView: 6,
        spaceBetween: 10,
    })

    const maxItems = 5;
    const sliderNavItems = document.querySelectorAll('.slider-nav__item');
    const sliderNav = document.querySelector('.slider-nav');

    sliderNavItems.forEach((el, index) => {
        el.setAttribute('data-index', index);

        el.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index);
            console.log(index)
            mySwiper.slideTo(index);
        });
    });

    // const showMore = () => {
    //   let childenLength = sliderNav.children.length;
    //   console.log(childenLength)
    //   if (childenLength > maxItems) {
    //     sliderNav.insertAdjacentHTML('beforeend', `
    // 			<div class="btn-center">
    // 				<button class="modal-open">Еще ${childenLength - maxItems}</button>
    // 			</div>
    // 		`);
    //     document.querySelectorAll(`.slider-nav__item:nth-child(n+${maxItems + 1})`).forEach(el => {el.style.display = 'none';});
    //   }
    //
    //   const modalOpen = document.querySelector('.modal-open');
    //   modalOpen.addEventListener('click', () => {new GraphModal().open('one');});
    // };

    // showMore();

});