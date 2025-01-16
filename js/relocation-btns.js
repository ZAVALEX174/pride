const headerContactUsBtn = document.getElementById('headerContactUsBtn');

let heroSliders = document.querySelector('.hero-swiper-wrapper');
let heroSlidersLiveCollections = heroSliders.children;

for (let item of heroSlidersLiveCollections) {
    let btnBox = item.querySelector('.hero-slider__buttons');
    // let btnBoxLiveCollection = btnBox.children;
    btnBox.innerHTML += `<div class="contact-us header__contact-us" id="headerContactUsBtn">
            <button class="btn contact-us__btn">Связаться с нами</button>
          </div>`;
}

// Секция work
const workBodySwiperContentBox = document.querySelector('.work__body-swiper-content-box');
console.log(workBodySwiperContentBox);
workBodySwiperContentBox.innerHTML += `<div id="workBodyItemImg" class="swiper-slide work__body-swiper-content-slider-slide work__body-item_img">
                  <div class="work__body-item">
                    <h3 class="work__body-cart-title work__body-cart-title_img">
                      Подбор установки по характеристикам
                    </h3>
                    <a
                      href="#"
                      class="btn work__body-cart-btn work__body-cart-btn_hover-block">
                      Подобрать
                    </a>
                  </div>
                </div>
<a href="catalog.html" class="work__header-link" id="workHeaderLink">Каталог</a>
`;

// Секция our-projects
const ourProjectsSlideOtziv = document.querySelector('.our-projects-swiper-image-box');
console.log(ourProjectsSlideOtziv);
ourProjectsSlideOtziv.innerHTML += `<div id="ourProjectsSlideOtziv" class="swiper-slide our-projects-slide our-projects-slide-otziv">
                  <div class="our-projects-slide__content">
                    <img
                      src="images/works/01.svg"
                      alt="..."
                      style="width: 133px; height: 130px" />
                    <h3 class="cart__title cart__title_otziv">
                      Оставить отзыв
                    </h3>
                    <div class="cart__subtitle cart__subtitle_otziv">
                      Ваше мнение важно для нас! <br />Оставить отзыв о нашей
                      работе <br />
                      можно прямо на сайте.
                    </div>
                    <div class="cart__btn-box our-projects-cart__btn-box">
                      <button
                        class="btn cart__btn our-projects-cart__btn-open-modal-form">
                        Написать
                      </button>
                    </div>
                  </div>
                </div>`;
