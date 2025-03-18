const headerContactUsBtn = document.getElementById('headerContactUsBtn');

let heroSliders = document.querySelector('.hero-swiper-wrapper');

if (heroSliders) {
  let heroSlidersLiveCollections = heroSliders.children;

  for (let item of heroSlidersLiveCollections) {
    let btnBox = item.querySelector('.hero-slider__buttons');
    btnBox.insertAdjacentHTML("beforeEnd", `<div class="contact-us header__contact-us" id="headerContactUsBtn">
             <button class="btn contact-us__btn">Связаться с нами</button>
           </div>`)
  }
}

// Секция work
const workBodySwiperContentBox = document.querySelector('.work__body-swiper-content-box');

if (workBodySwiperContentBox) {
  workBodySwiperContentBox.insertAdjacentHTML("afterBegin", `<div id="workBodyItemImg" class="swiper-slide work__body-swiper-content-slider-slide work__body-item_img">
                  <div class="work__body-item">
                    <h3 class="work__body-cart-title work__body-cart-title_img">
                      Подбор установки
                    </h3>
                    <button class="btn work__body-cart-btn work__body-cart-btn_hover-block">
                      Заявка
                    </button>
                  </div>
                </div>
<a href="catalog.html" class="work__header-link" id="workHeaderLink">Каталог</a>
`);
}

// Секция our-projects
const ourProjectsSlideOtziv = document.querySelector('.our-projects-swiper-image-box');
if (ourProjectsSlideOtziv) {
  ourProjectsSlideOtziv.insertAdjacentHTML("afterBegin", `<div id="ourProjectsSlideOtziv" class="swiper-slide our-projects-slide our-projects-slide-otziv">
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
                        class="btn cart__btn_or our-projects-cart__btn-open-modal-form">
                        Написать
                      </button>
                    </div>
                  </div>
                </div>`);
}

// Секция products
const productBtnLinkBox = document.querySelector('.product-btn-link-box');

if (productBtnLinkBox) {
  productBtnLinkBox.insertAdjacentHTML("afterBegin", `
 <a href="catalog-menu.html" class="btn product-btn-link" id="productBtnLink" >Каталог</a>
`);
}

// Секция categories
const categoriesBtnsBox = document.querySelector('.categories__btns-box');

if (categoriesBtnsBox) {
  categoriesBtnsBox.insertAdjacentHTML("afterBegin", `
 <a href="#" id="categoriesBtnParams" class="btn categories__btn categories__btn_selected">Подбор по параметрам<svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.625 6.25C14.0747 6.25 15.25 5.07475 15.25 3.625C15.25 2.17525 14.0747 1 12.625 1C11.1753 1 10 2.17525 10 3.625C10 5.07475 11.1753 6.25 12.625 6.25Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M1.25 3.625H10"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M15.25 3.625H24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M21.375 15C22.8247 15 24 13.8247 24 12.375C24 10.9253 22.8247 9.75 21.375 9.75C19.9253 9.75 18.75 10.9253 18.75 12.375C18.75 13.8247 19.9253 15 21.375 15Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M18.75 12.375H1.25"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg><span class="param-count">+3</span></a>
 <a href="catalog.html" id="categoriesBtnCatalog" class="btn categories__link">Каталог</a>
`);
}


// Секция watched-before
const watchedBeforeProductCartLinkBox = document.querySelector('.watched-before__product-cart-link-box');

if (watchedBeforeProductCartLinkBox) {
  watchedBeforeProductCartLinkBox.insertAdjacentHTML("afterBegin", `
 <a href="catalog-menu.html" id="watchedBeforeLink" class="btn product-cart__header-link">Каталог</a>
`);
}

// Секция other
const otherHeaderLinkBox = document.querySelector('.other__header-link-box');

if (otherHeaderLinkBox) {
  otherHeaderLinkBox.insertAdjacentHTML("afterBegin", `
 <a href="catalog.html" id="otherHeaderLink" class="btn other__header-link">Каталог</a>
`);
}

