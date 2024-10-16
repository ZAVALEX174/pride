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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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

    // количество отображающихся видео карточек
    let quantityVideo = document.querySelectorAll('.video-content').length;
    let videoContent = document.querySelectorAll('.video-content');
    let content = document.querySelector('.content');

    if (quantityVideo == 1) {
        content.classList.add('content_one');
        videoContent.forEach(video => {
            video.classList.add('video-content_one');
        })
    } else {
        content.classList.remove('content_one');
        videoContent.forEach(video => {
            video.classList.remove('video-content_one');
        })
    }


    const tabs = document.querySelector('.product-cart-description-tabs');
    const tabsBtn = document.querySelectorAll('.product-cart-description-tabs__btn');
    const tabsContent = document.querySelectorAll('.tabs__content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('product-cart-description-tabs__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                console.log(tabsPath);

                tabsHandler(tabsPath);
            }
        })
    }

    const tabsHandler = (path) => {
        tabsBtn.forEach(el => {
            el.classList.remove('product-cart-description-tabs__btn_active')
        });
        document.querySelector(`[data-tabs-path="${path}"]`).classList.add('product-cart-description-tabs__btn_active');

        tabsContent.forEach(el => {
            el.classList.remove('tabs__content_active')
        });
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content_active');

    }

});

const titles = document.querySelectorAll('.accordion__title');
const contents = document.querySelectorAll('.accordion__list');

titles.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('accordion__list_active')) {
        activeContent.classList.remove('accordion__list_active');
        item.classList.remove('accordion__list_active');
        activeContent.style.maxHeight = 0;
    } else {
        contents.forEach(element => {
            element.classList.remove('accordion__list_active');
            element.style.maxHeight = 0;
        })

        titles.forEach(el => el.classList.remove('accordion__list_active'));

        item.classList.add('accordion__list_active');
        activeContent.classList.add('accordion__list_active');
        activeContent.style.maxHeight = activeContent.scrollHeight + "px";
    }
}))