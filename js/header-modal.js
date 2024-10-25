document.addEventListener('DOMContentLoaded', () => {
    // открытие модальных окон
    const headerModalOne = document.querySelector(".header-menu-madal");
    const headerModalTwo = document.querySelector(".header-menu-madal2");
    const headerModalThree = document.querySelector(".header-menu-madal3");
    const openModalBtnOne = document.querySelector(".modal-one");
    const openModalBtnOneLink = openModalBtnOne.querySelector(".navigation__link_drd");
    const openModalBtnTwo = document.querySelector(".modal-two");
    const openModalBtnTwoLink = openModalBtnTwo.querySelector(".navigation__link_drd");
    const closeModalBtn = document.querySelector(".header-menu-madal__close-btn");
    const closeModalBtnTwo = document.querySelector(".header-menu-madal__close-btn2");
    const closeModalBtnThree = document.querySelector(".header-menu-madal__close-btn3");
    const openSearchBtn = document.querySelector('.search');
    const inputSaerch = document.querySelector('.search .search-input');
    const headerSearch = document.querySelector('.search.header__search');
    const headerLogo = document.querySelector('.header__logo');
    const headerUser = document.querySelector('.header__user');
    const headerContactUs = document.querySelector('.header__contact-us');
    const headerFavorites = document.querySelector('.header__favorites');
    const searchBtn = document.querySelector('.search__btn');
    const navLinkOne = document.querySelector('.modal-one .navigation__link');
    const navLinkTwo = document.querySelector('.modal-two .navigation__link');

    openModalBtnOne.addEventListener("click", (e) => {
        e.preventDefault();
        inputSaerch.classList.remove('search__active-input');
        headerSearch.classList.remove('header__search_active');
        searchBtn.classList.remove('search__btn_active');
        headerLogo.classList.remove('none');
        headerUser.classList.remove('none');
        headerContactUs.classList.remove('none');
        headerFavorites.classList.remove('none');

        navLinkTwo.classList.remove('navigation__link-active');
        openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
        headerModalThree.style.display = "none";
        headerModalTwo.style.display = "none";
        headerModalOne.style.display = "block";
        openModalBtnOneLink.classList.add('navigation__link_drd-active');
        document.body.style.overflow = "hidden";
        navLinkOne.classList.add('navigation__link-active');

    });
    closeModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navLinkOne.classList.remove('navigation__link-active');
        openModalBtnOneLink.classList.remove('navigation__link_drd-active');
        headerModalOne.style.display = "none";
        document.body.style.overflow = "";
    });

    openModalBtnTwo.addEventListener("click", (e) => {
        e.preventDefault();
        inputSaerch.classList.remove('search__active-input');
        headerSearch.classList.remove('header__search_active');
        searchBtn.classList.remove('search__btn_active');
        headerLogo.classList.remove('none');
        headerUser.classList.remove('none');
        headerContactUs.classList.remove('none');
        headerFavorites.classList.remove('none');

        navLinkOne.classList.remove('navigation__link-active');
        openModalBtnOneLink.classList.remove('navigation__link_drd-active');
        headerModalThree.style.display = "none";
        headerModalOne.style.display = "none";
        headerModalTwo.style.display = "block";
        openModalBtnTwoLink.classList.add('navigation__link_drd-active');
        document.body.style.overflow = "hidden";
        navLinkTwo.classList.add('navigation__link-active');
    });
    closeModalBtnTwo.addEventListener("click", (e) => {
        e.preventDefault();
        navLinkTwo.classList.remove('navigation__link-active');
        navLinkOne.classList.remove('navigation__link-active');
        openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
        headerModalTwo.style.display = "none";
        document.body.style.overflow = "";
    });
    openSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navLinkTwo.classList.remove('navigation__link-active');
        navLinkOne.classList.remove('navigation__link-active');
        openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
        openModalBtnOneLink.classList.remove('navigation__link_drd-active');
        headerModalOne.style.display = "none";
        headerModalTwo.style.display = "none";
        headerModalThree.style.display = "block";
        inputSaerch.classList.add('search__active-input');
        headerSearch.classList.add('header__search_active');
        document.body.style.overflow = "hidden";
        headerLogo.classList.add('none');
        headerUser.classList.add('none');
        headerContactUs.classList.add('none');
        headerFavorites.classList.add('none');
        searchBtn.classList.add('search__btn_active');
    });
    closeModalBtnThree.addEventListener('click', (e) => {
        e.preventDefault();
        inputSaerch.classList.remove('search__active-input');
        headerSearch.classList.remove('header__search_active');
        searchBtn.classList.remove('search__btn_active');
        headerLogo.classList.remove('none');
        headerUser.classList.remove('none');
        headerContactUs.classList.remove('none');
        headerFavorites.classList.remove('none');
        document.body.style.overflow = "";
        headerModalThree.style.display = "none";
    })


    // закрепленте Header при скроле
    const header = document.querySelector(".header");
    const headerTop = document.querySelector(".header__top");
    const headerDown = document.querySelector(".header__down");
    const headerMenu = document.querySelector(".header__menu");
    const hero = document.querySelector(".hero");
    const headerModal = document.querySelector(".header-menu-madal");


    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;// Величина скролла
        let headerTopHeight = headerTop.clientHeight; //Высота блока Топ хедера
        let headerMenuHeight = headerMenu.clientHeight; //Высота блока Меню хедера


        // console.log(headerMenuHeight, scrollTop);

        if (scrollTop >= headerTopHeight) {
            // console.log("ghbdtn");
            header.style.marginTop = `-${headerTopHeight}px`;
            headerMenu.classList.add('header__menu_hidden');
            header.classList.add('header_fixed');
            let headerHeight = header.clientHeight; //Высота всего хедера
            document.body.style.marginTop = `${headerHeight}px`;
            headerModal.style.height = `75vh`;
        } else {
            headerMenu.classList.remove('header__menu_hidden');
            header.classList.remove('header_fixed');
            header.style.marginTop = 0;
            document.body.style.marginTop = 0;
            headerModal.style.height = `67vh`;
        }
    })
})





































