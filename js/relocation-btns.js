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
