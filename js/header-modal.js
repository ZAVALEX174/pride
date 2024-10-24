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
        headerModalTwo.style.display = "none";
        headerModalOne.style.display = "block";
        document.body.style.overflow = "hidden";

    });
    closeModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        headerModalOne.style.display = "none";
        document.body.style.overflow = "";
    });

    openModalBtnTwo.addEventListener("click", (e) => {
        e.preventDefault();
        headerModalOne.style.display = "none";
        headerModalTwo.style.display = "block";
        document.body.style.overflow = "hidden";
    });
    closeModalBtnTwo.addEventListener("click", (e) => {
        e.preventDefault();
        headerModalTwo.style.display = "none";
        document.body.style.overflow = "";
    });


    // закрепленте Header при скроле
    const header = document.querySelector(".header");
    const headerTop = document.querySelector(".header__top");
    const headerDown = document.querySelector(".header__down");
    const headerMenu = document.querySelector(".header__menu");
    const hero = document.querySelector(".hero");
    const headerModal = document.querySelector(".header-menu-madal");


    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;// Величина скролла
        let headerTopHeight = headerTop.offsetHeight; //Высота блока Топ хедера
        let headerMenuHeight = headerMenu.offsetHeight; //Высота блока Меню хедера


        console.log(headerMenuHeight, scrollTop);

        if (scrollTop >= headerTopHeight) {
            console.log("ghbdtn");
            header.style.marginTop = `-${headerTopHeight}px`;
            headerMenu.classList.add('header__menu_hidden');
            header.classList.add('header_fixed');
            let headerHeight = header.offsetHeight; //Высота всего хедера
            hero.style.marginTop = `${headerHeight}px`;
            headerModal.style.height = `75vh`;
        } else {
            headerMenu.classList.remove('header__menu_hidden');
            header.classList.remove('header_fixed');
            header.style.marginTop = 0;
            hero.style.marginTop = 0;
            headerModal.style.height = `67vh`;
        }
    })
})





































