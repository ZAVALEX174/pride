const headerContactUsBtn = document.getElementById('headerContactUsBtn');

let heroSliders = document.querySelector('.hero-swiper-wrapper');

const contactUsBtnValue = document.querySelector('.contact-us__btn').textContent;
// console.log(contactUsBtnValue);


if (heroSliders && contactUsBtnValue) {
  let heroSlidersLiveCollections = heroSliders.children;

  for (let item of heroSlidersLiveCollections) {
    let btnBox = item.querySelector('.hero-slider__buttons');
    btnBox.insertAdjacentHTML("beforeEnd", `<div class="contact-us header__contact-us" id="headerContactUsBtn">
             <button class="btn contact-us__btn">${contactUsBtnValue}</button>
           </div>`)
  }
}

// Секция work
const workBodySwiperContentBox = document.querySelector('.work__body-swiper-content-box');
const workBodyItemImgSlide = document.querySelector('.work__body-item_img');
const workBodyItemImgSlideTitle = document.querySelector('.work__body-cart-title_img').textContent;
const workBodyItemImgSlideBtnValue = document.querySelector('.work__body-cart-btn.work__body-cart-btn_hover-block').textContent;
const workHeaderLinkValue = document.querySelector('.work__header-link').textContent;
// console.log(workHeaderLinkValue);


if (workBodySwiperContentBox && workBodyItemImgSlide && workBodyItemImgSlideTitle && workBodyItemImgSlideBtnValue && workHeaderLinkValue) {
  workBodySwiperContentBox.insertAdjacentHTML("afterBegin", `<div id="workBodyItemImg" class="swiper-slide work__body-swiper-content-slider-slide work__body-item_img">
                  <div class="work__body-item">
                    <h3 class="work__body-cart-title work__body-cart-title_img">
                      ${workBodyItemImgSlideTitle}
                    </h3>
                    <button class="btn work__body-cart-btn work__body-cart-btn_hover-block">
                    ${workBodyItemImgSlideBtnValue}
                    </button>
                  </div>
                </div>
<a href="catalog.html" class="work__header-link" id="workHeaderLink">${workHeaderLinkValue}</a>
`);
}

// Секция our-projects
const ourProjectsSlideOtziv = document.querySelector('.our-projects-swiper-image-box');
const ourProjectsSlideOtzivBox = document.querySelector('.swiper-slide.our-projects-slide.our-projects-slide-otziv');
const ourProjectsSlideOtzivBoxImgSrc = ourProjectsSlideOtzivBox.querySelector('img').src;
const ourProjectsSlideOtzivBoxImgAlt = ourProjectsSlideOtzivBox.querySelector('img').alt;
const ourProjectsSlideOtzivBoxTitle = ourProjectsSlideOtzivBox.querySelector('.cart__title.cart__title_otziv').textContent;
const ourProjectsSlideOtzivBoxSubtitle = ourProjectsSlideOtzivBox.querySelector('.cart__subtitle.cart__subtitle_otziv').textContent;
const ourProjectsSlideOtzivBoxBtnValue = ourProjectsSlideOtzivBox.querySelector('.cart__btn_or.our-projects-cart__btn-open-modal-form').textContent;

// console.log(ourProjectsSlideOtzivBoxBtnValue);
if (ourProjectsSlideOtziv && ourProjectsSlideOtzivBox && ourProjectsSlideOtzivBoxImgSrc && ourProjectsSlideOtzivBoxImgAlt && ourProjectsSlideOtzivBoxTitle && ourProjectsSlideOtzivBoxSubtitle && ourProjectsSlideOtzivBoxBtnValue) {
  ourProjectsSlideOtziv.insertAdjacentHTML("afterBegin", `<div id="ourProjectsSlideOtziv" class="swiper-slide our-projects-slide our-projects-slide-otziv">
                  <div class="our-projects-slide__content">
                    <img
                      src="${ourProjectsSlideOtzivBoxImgSrc}"
                      alt="${ourProjectsSlideOtzivBoxImgAlt}"
                      style="width: 133px; height: 130px" />
                    <h3 class="cart__title cart__title_otziv">
                    ${ourProjectsSlideOtzivBoxTitle}
                    </h3>
                    <div class="cart__subtitle cart__subtitle_otziv">
                    ${ourProjectsSlideOtzivBoxSubtitle}
                    </div>
                    <div class="cart__btn-box our-projects-cart__btn-box">
                      <button
                        class="btn cart__btn_or our-projects-cart__btn-open-modal-form">
                        ${ourProjectsSlideOtzivBoxBtnValue}
                      </button>
                    </div>
                  </div>
                </div>`);
}

// Секция products
const productBtnLinkBox = document.querySelector('.product-btn-link-box');
const productBtnLinkBoxBtnValue = document.querySelector('.product-btn-link').textContent;
const productBtnLinkBoxBtnHref = document.querySelector('.product-btn-link').href;
// console.log(productBtnLinkBoxBtnHref);


if (productBtnLinkBox && productBtnLinkBoxBtnValue && productBtnLinkBoxBtnHref) {
  productBtnLinkBox.insertAdjacentHTML("afterBegin", `
 <a href="${productBtnLinkBoxBtnHref}" class="btn product-btn-link" id="productBtnLink" >${productBtnLinkBoxBtnValue}</a>
`);
}

// Секция categories
const categoriesBtnsBox = document.querySelector('.categories__btns-box');
const categoriesBtnsBoxBtnValue = document.querySelector('.categories__link').textContent;
const categoriesBtnsBoxBtnHref = document.querySelector('.categories__link').href;
const mobileFilterBtnValue = document.querySelector('.catalog-categories__header-btn-box');


console.log(mobileFilterBtnValue);


if (categoriesBtnsBox && categoriesBtnsBoxBtnValue && categoriesBtnsBoxBtnHref) {
  categoriesBtnsBox.insertAdjacentHTML("afterBegin", `<a href="${categoriesBtnsBoxBtnHref}" id="categoriesBtnCatalog" class="btn categories__link">${categoriesBtnsBoxBtnValue}</a>
`);
}


// Секция watched-before
const watchedBeforeProductCartLinkBox = document.querySelector('.watched-before__product-cart-link-box');
const watchedBeforeProductCartLinkValue = document.querySelector('.product-cart__header-link').textContent;
const watchedBeforeProductCartLinkHref = document.querySelector('.product-cart__header-link').href;
// console.log(watchedBeforeProductCartLinkHref);

if (watchedBeforeProductCartLinkBox && watchedBeforeProductCartLinkValue &&watchedBeforeProductCartLinkHref) {
  watchedBeforeProductCartLinkBox.insertAdjacentHTML("afterBegin", `
 <a href="${watchedBeforeProductCartLinkHref}" id="watchedBeforeLink" class="btn product-cart__header-link">${watchedBeforeProductCartLinkValue}</a>
`);
}

// Секция other
const otherHeaderLinkBox = document.querySelector('.other__header-link-box');
const otherHeaderLinkBoxBtnValue = document.querySelector('.other__header-link').textContent;
const otherHeaderLinkBoxBtnHref = document.querySelector('.other__header-link').href;
// console.log(otherHeaderLinkBoxBtnHref);


if (otherHeaderLinkBox && otherHeaderLinkBoxBtnValue && otherHeaderLinkBoxBtnHref) {
  otherHeaderLinkBox.insertAdjacentHTML("afterBegin", `
 <a href="${otherHeaderLinkBoxBtnHref}" id="otherHeaderLink" class="btn other__header-link">${otherHeaderLinkBoxBtnValue}</a>
`);
}

