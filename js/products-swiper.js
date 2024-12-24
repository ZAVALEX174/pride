var productsSwiper = new Swiper(".products-swiper", {
    slidesPerView: "auto",
    speed: 500,
    // centeredSlides: true,
    // loop: true,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: '.products-swiper_next',
        prevEl: '.products-swiper_prev',
    },

});

var productsSwiperBefore = new Swiper(".watched-before__product-cart-swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 500,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.watched-before__product-cart-btn_next',
        prevEl: '.watched-before__product-cart-btn_prev',
    },
});

const productsSlide = document.querySelectorAll(".products-slide");


if (productsSlide) {
    productsSlide.forEach(el => {
        let currentCart = el;
        const cartSwitchItem = currentCart.querySelectorAll(".cart-switch__item");
        const imagePagination = currentCart.querySelector(".image-pagination");

        if (cartSwitchItem.length > 1) {
            cartSwitchItem.forEach((el, index) => {
                // добавляем дата-атрибут каждому item
                el.setAttribute("data-index", index);
                imagePagination.innerHTML += `<li class="image-pagination__item ${index == 0 ? 'image-pagination__item_active' : ''}" data-index="${index}"></li>`;
                el.addEventListener("mouseenter", (e) => {
                    currentCart.querySelectorAll(".image-pagination__item").forEach((el) => { el.classList.remove('image-pagination__item_active'); });
                    currentCart.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item_active');
                })

                el.addEventListener("mouseleave", (e) => {
                    currentCart.querySelectorAll(".image-pagination__item").forEach((el) => { el.classList.remove('image-pagination__item_active'); });
                    currentCart.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item_active');
                })

            })
        }

    });
}

