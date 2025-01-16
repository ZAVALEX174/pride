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