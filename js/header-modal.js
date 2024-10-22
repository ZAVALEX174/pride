// const headerModalOne = document.querySelector(".header-menu-madal");
// const headerModalTwo = document.querySelector(".header-menu-madal2");
// const openModalBtnOne = document.querySelector(".modal-one");
// const openModalBtnTwo = document.querySelector(".modal-two");
// const closeModalBtn = document.querySelector(".header-menu-madal__close-btn");
// const closeModalBtnTwo = document.querySelector(".header-menu-madal__close-btn2");
//
// openModalBtnOne.addEventListener("click", (e) => {
//   e.preventDefault();
//   headerModalOne.style.display = "block";
// });
// closeModalBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   headerModalOne.style.display = "none";
// });
//
// openModalBtnTwo.addEventListener("click", (e) => {
//   e.preventDefault();
//   headerModalTwo.style.display = "block";
// });
// closeModalBtnTwo.addEventListener("click", (e) => {
//   e.preventDefault();
//   headerModalTwo.style.display = "none";
// });

document.addEventListener('DOMContentLoaded', () => {
    // открытие модальных окон
    const headerModalOne = document.querySelector(".header-menu-madal");
    const headerModalTwo = document.querySelector(".header-menu-madal2");
    const openModalBtnOne = document.querySelector(".modal-one");
    const openModalBtnTwo = document.querySelector(".modal-two");
    const closeModalBtn = document.querySelector(".header-menu-madal__close-btn");
    const closeModalBtnTwo = document.querySelector(".header-menu-madal__close-btn2");

    openModalBtnOne.addEventListener("click", (e) => {
        e.preventDefault();
        headerModalOne.style.display = "block";
    });
    closeModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        headerModalOne.style.display = "none";
    });

    openModalBtnTwo.addEventListener("click", (e) => {
        e.preventDefault();
        headerModalTwo.style.display = "block";
    });
    closeModalBtnTwo.addEventListener("click", (e) => {
        e.preventDefault();
        headerModalTwo.style.display = "none";
    });


    // закрепленте Header при скроле
    const header = document.querySelector(".header");
    const headerTop = document.querySelector(".header__top");
    const headerMenu = document.querySelector(".header__menu");
    const hero = document.querySelector(".hero");

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let heroTop = hero.offsetHeight / 2;
        console.log('scrollTop:', scrollTop);
        console.log(heroTop);

        if (scrollTop >= heroTop) {
            headerMenu.classList.add('header__menu_hidden');
            headerTop.classList.add('header__top_none');
            header.classList.add('header_fixed');
            hero.style.marginTop = `${header.offsetHeight}px`;
        } else {
            headerTop.classList.remove('header__top_none');
            headerMenu.classList.remove('header__menu_hidden');
            header.classList.remove('header_fixed');
            hero.style.marginTop = `0px`;

        }
    })
})





































