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
// изменения от 23_04_25

const work = document.querySelector('.work');
if (work) {
  // изменения от 23_04_25
  const workBodySwiperContentBox = document.querySelector('.work__body-swiper-content-box');
  const workBodyItemImgSlide = document.querySelector('.work__body-item_img');
  const workBodyItemImgSlideTitle = document.querySelector('.work__body-cart-title_img').textContent;
  const workBodyItemImgSlideBtnValue = document.querySelector('.work__body-cart-btn.work__body-cart-btn_hover-block').textContent;
  const workHeaderBtn = document.querySelector('.work__header-link');
  
  // console.log(workHeaderLinkValue);


  if (workBodySwiperContentBox && workBodyItemImgSlide && workBodyItemImgSlideTitle && workBodyItemImgSlideBtnValue) {
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
`);
  }



  // Сохраняем оригинального родителя кнопки
  const originalParenWorkHeadert = workHeaderBtn.parentNode;
  let isMoved = false; // Флаг для отслеживания состояния

  // Функция для проверки и перемещения кнопки
  const checkScreenSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1024 && !isMoved) {
          // Перемещаем кнопку только если она еще не перемещена
          workBodySwiperContentBox.appendChild(workHeaderBtn);
          isMoved = true;
      } else if (screenWidth >= 1024 && isMoved) {
          // Возвращаем на место при увеличении экрана
          originalParenWorkHeadert.appendChild(workHeaderBtn);
          isMoved = false;
      }
  };

  // Дебаунсинг для оптимизации обработки resize
  const debounce = (func, wait = 100) => {
      let timeout;
      return (...args) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, args), wait);
      };
  };

  // Вызываем при загрузке
  checkScreenSize();

  // Добавляем обработчик с дебаунсингом
  window.addEventListener('resize', debounce(checkScreenSize));

  // Дополнительная проверка при изменении ориентации устройства
  window.addEventListener('orientationchange', debounce(checkScreenSize));

}
// изменения от 23_04_25
// Секция our-projects
// изменения от 23_04_25
const ourProjectsBody = document.querySelector('.our-projects__body');

if (ourProjectsBody) {
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
}
// изменения от 23_04_25
// Секция products
const productBody = document.querySelector('.products__body');
if (productBody) {
  const productBtnLinkBox = document.querySelector('.product-btn-link-box');
  const productBtn = document.querySelector('.product-btn-link'); 

  // Сохраняем оригинального родителя кнопки
  const originalParent = productBtn.parentNode;
  let isMoved = false; // Флаг для отслеживания состояния

  // Функция для проверки и перемещения кнопки
  const checkScreenSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1024 && !isMoved) {
          // Перемещаем кнопку только если она еще не перемещена
          productBtnLinkBox.appendChild(productBtn);
          isMoved = true;
      } else if (screenWidth >= 1024 && isMoved) {
          // Возвращаем на место при увеличении экрана
          originalParent.appendChild(productBtn);
          isMoved = false;
      }
  };

  // Дебаунсинг для оптимизации обработки resize
  const debounce = (func, wait = 100) => {
      let timeout;
      return (...args) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, args), wait);
      };
  };

  // Вызываем при загрузке
  checkScreenSize();

  // Добавляем обработчик с дебаунсингом
  window.addEventListener('resize', debounce(checkScreenSize));

  // Дополнительная проверка при изменении ориентации устройства
  window.addEventListener('orientationchange', debounce(checkScreenSize));
}

// Секция categories
const categoriesBody = document.querySelector('.categories__body-swiper');

if (categoriesBody) {
  const categoriesBtnsBox = document.querySelector('.categories__btns-box');
  const categoriesBtn = document.querySelector('.categories .categories__link');

   // Сохраняем оригинального родителя кнопки
   const originalParentCategories = categoriesBtn.parentNode;
   let isMoved = false; // Флаг для отслеживания состояния
 
   // Функция для проверки и перемещения кнопки
   const checkScreenSize = () => {
       const screenWidth = window.innerWidth;
 
       if (screenWidth < 1024 && !isMoved) {
           // Перемещаем кнопку только если она еще не перемещена
           categoriesBtnsBox.appendChild(categoriesBtn);
           isMoved = true;
       } else if (screenWidth >= 1024 && isMoved) {
           // Возвращаем на место при увеличении экрана
           originalParentCategories.appendChild(categoriesBtn);
           isMoved = false;
       }
   };
 
   // Дебаунсинг для оптимизации обработки resize
   const debounce = (func, wait = 100) => {
       let timeout;
       return (...args) => {
           clearTimeout(timeout);
           timeout = setTimeout(() => func.apply(this, args), wait);
       };
   };
 
   // Вызываем при загрузке
   checkScreenSize();
 
   // Добавляем обработчик с дебаунсингом
   window.addEventListener('resize', debounce(checkScreenSize));
 
   // Дополнительная проверка при изменении ориентации устройства
   window.addEventListener('orientationchange', debounce(checkScreenSize));
}

// Секция watched-before
const watchedBeforeBody = document.querySelector('.watched-before__body-content');

if (watchedBeforeBody) {
  const watchedBeforeProductCartLinkBox = document.querySelector('.watched-before__product-cart-link-box');
  const watchedBeforeProductBtn = document.querySelector('.product-cart__header-link'); 
    // Сохраняем оригинального родителя кнопки
    const originalParentWatchedBeforeProduct = watchedBeforeProductBtn.parentNode;
    let isMoved = false; // Флаг для отслеживания состояния  
    // Функция для проверки и перемещения кнопки
    const checkScreenSize = () => {
        const screenWidth = window.innerWidth;  
        if (screenWidth < 1024 && !isMoved) {
            // Перемещаем кнопку только если она еще не перемещена
            watchedBeforeProductCartLinkBox.appendChild(watchedBeforeProductBtn);
            isMoved = true;
        } else if (screenWidth >= 1024 && isMoved) {
            // Возвращаем на место при увеличении экрана
            originalParentWatchedBeforeProduct.appendChild(watchedBeforeProductBtn);
            isMoved = false;
        }
    };
  
    // Дебаунсинг для оптимизации обработки resize
    const debounce = (func, wait = 100) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };
  
    // Вызываем при загрузке
    checkScreenSize();
  
    // Добавляем обработчик с дебаунсингом
    window.addEventListener('resize', debounce(checkScreenSize));
  
    // Дополнительная проверка при изменении ориентации устройства
    window.addEventListener('orientationchange', debounce(checkScreenSize));
}

// Секция other
const otherBody = document.querySelector('.other__body');
if (otherBody) {
  // const otherBody = document.querySelector('.other__header-link-box');
  const otherHeaderLinkBoxBtn = document.querySelector('.other__header-link');
   // Сохраняем оригинального родителя кнопки
   const originalParentOtherHeader = otherHeaderLinkBoxBtn.parentNode;
   let isMoved = false; // Флаг для отслеживания состояния 
   // Функция для проверки и перемещения кнопки
   const checkScreenSize = () => {
       const screenWidth = window.innerWidth; 
       if (screenWidth < 1024 && !isMoved) {
           // Перемещаем кнопку только если она еще не перемещена
           otherBody.appendChild(otherHeaderLinkBoxBtn);
           isMoved = true;
       } else if (screenWidth >= 1024 && isMoved) {
           // Возвращаем на место при увеличении экрана
           originalParentOtherHeader.appendChild(otherHeaderLinkBoxBtn);
           isMoved = false;
       }
   };
 
   // Дебаунсинг для оптимизации обработки resize
   const debounce = (func, wait = 100) => {
       let timeout;
       return (...args) => {
           clearTimeout(timeout);
           timeout = setTimeout(() => func.apply(this, args), wait);
       };
   };
 
   // Вызываем при загрузке
   checkScreenSize();
 
   // Добавляем обработчик с дебаунсингом
   window.addEventListener('resize', debounce(checkScreenSize));
 
   // Дополнительная проверка при изменении ориентации устройства
   window.addEventListener('orientationchange', debounce(checkScreenSize));
}