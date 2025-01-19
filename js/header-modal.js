document.addEventListener('DOMContentLoaded', () => {
    // открытие модальных окон
    const headerModalOne = document.querySelector(".header-menu-modal");
    const headerModalTwo = document.querySelector(".header-menu-modal2");
    const headerModalThree = document.querySelector(".header-menu-modal3");
    const openModalBtnOne = document.querySelector(".modal-one");
    const openModalBtnOneLink = openModalBtnOne.querySelector(".navigation__link_drd");
    const openModalBtnTwo = document.querySelector(".modal-two");
    const openModalBtnTwoLink = openModalBtnTwo.querySelector(".navigation__link_drd");
    const closeModalBtn = document.querySelector(".header-menu-modal__close-btn");
    const closeModalBtnTwo = document.querySelector(".header-menu-modal__close-btn2");
    const closeModalBtnThree = document.querySelector(".header-menu-modal__close-btn3");
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


    let breadcrumbsElement = document.querySelector('.breadcrumbs');
    let scrollBarClient = document.documentElement.clientWidth;
    let scrollBarAll = window.innerWidth;

    openModalBtnOne.addEventListener("click", (e) => {
        e.preventDefault();


        if (headerModalOne.classList.contains('header-menu-modal-active')) {
            headerModalOne.classList.remove('header-menu-modal-active');
            navLinkOne.classList.remove('navigation__link-active');
            headerModalThree.classList.remove('header-menu-modal3-active');

            document.body.style.overflow = "";
            document.body.style.paddingRight = "";

            document.querySelector('.main').classList.remove('main-overlay');


            if (breadcrumbsElement != null) {
                document.querySelector('.breadcrumbs').classList.remove('main-overlay');
                console.log('я существую');

            }

            // document.querySelector('.breadcrumbs').classList.remove('main-overlay');


        } else {
            headerModalOne.classList.add('header-menu-modal-active');
            navLinkOne.classList.add('navigation__link-active');
            headerModalTwo.classList.remove('header-menu-modal2-active');
            headerModalThree.classList.remove('header-menu-modal3-active');
            document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            document.body.style.overflow = "hidden";


            document.querySelector('.main').classList.add('main-overlay');
            if (breadcrumbsElement != null) {
                document.querySelector('.breadcrumbs').classList.add('main-overlay');
            }
        }

        inputSaerch.classList.remove('search__active-input');
        headerSearch.classList.remove('header__search_active');
        searchBtn.classList.remove('search__btn_active');
        document.querySelector('.btn-search-reset').style.display = 'none';
        document.querySelector('.header__search-form-icon').style.left = '0';
        headerLogo.classList.remove('none');
        headerUser.classList.remove('none');
        headerContactUs.classList.remove('none');
        headerFavorites.classList.remove('none');

        navLinkTwo.classList.remove('navigation__link-active');
        openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
        // headerModalThree.classList.remove('header-menu-modal3-active');
        // document.body.style.overflow = "hidden";
        // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;

    });
    closeModalBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navLinkOne.classList.remove('navigation__link-active');
        openModalBtnOneLink.classList.remove('navigation__link_drd-active');
        headerModalOne.classList.remove('header-menu-modal-active');
        headerModalThree.classList.remove('header-menu-modal3-active');

        document.body.style.overflow = "";
        document.body.style.paddingRight = "";


        document.querySelector('.main').classList.remove('main-overlay');
        if (breadcrumbsElement != null) {
            document.querySelector('.breadcrumbs').classList.remove('main-overlay');
        }
    });

    openModalBtnTwo.addEventListener("click", (e) => {
        e.preventDefault();

        headerModalOne.classList.remove('header-menu-modal-active');
        navLinkOne.classList.remove('navigation__link-active');
        openModalBtnOneLink.classList.remove('navigation__link_drd-active');

        if (headerModalTwo.classList.contains('header-menu-modal2-active')) {
            headerModalTwo.classList.remove('header-menu-modal2-active');
            navLinkTwo.classList.remove('navigation__link-active');
            openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
            headerModalThree.classList.remove('header-menu-modal3-active');

            document.body.style.overflow = "";
            document.body.style.paddingRight = "";


            document.querySelector('.main').classList.remove('main-overlay');
            if (breadcrumbsElement != null) {
                document.querySelector('.breadcrumbs').classList.remove('main-overlay');
            }
        } else {

            headerModalTwo.classList.add('header-menu-modal2-active');
            navLinkTwo.classList.add('navigation__link-active');
            openModalBtnTwoLink.classList.add('navigation__link_drd-active');
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;


            document.querySelector('.main').classList.add('main-overlay');
            if (breadcrumbsElement != null) {
                document.querySelector('.breadcrumbs').classList.add('main-overlay');
            }
        }

        inputSaerch.classList.remove('search__active-input');
        headerSearch.classList.remove('header__search_active');
        searchBtn.classList.remove('search__btn_active');
        document.querySelector('.btn-search-reset').style.display = 'none';
        document.querySelector('.header__search-form-icon').style.left = '0';
        headerLogo.classList.remove('none');
        headerUser.classList.remove('none');
        headerContactUs.classList.remove('none');
        headerFavorites.classList.remove('none');

        headerModalThree.classList.remove('header-menu-modal3-active');

        // document.body.style.overflow = "hidden";
        // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
    });
    // closeModalBtnTwo.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     navLinkTwo.classList.remove('navigation__link-active');
    //     navLinkOne.classList.remove('navigation__link-active');
    //     openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
    //     headerModalTwo.classList.remove('header-menu-modal2-active');
    //     headerModalThree.classList.remove('header-menu-modal3-active');
    //     document.body.style.overflow = "";
    //     document.body.style.paddingRight = "";


    //     document.querySelector('.main').classList.remove('main-overlay');
    // });

    openSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();

        headerModalOne.classList.remove('header-menu-modal-active');
        headerModalTwo.classList.remove('header-menu-modal2-active');
        navLinkTwo.classList.remove('navigation__link-active');
        navLinkOne.classList.remove('navigation__link-active');
        openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
        openModalBtnOneLink.classList.remove('navigation__link_drd-active');

        headerModalThree.classList.remove('header-menu-modal3-active');
        inputSaerch.classList.remove('search__active-input');
        headerSearch.classList.remove('header__search_active');

        headerLogo.classList.remove('none');
        headerUser.classList.remove('none');
        headerContactUs.classList.remove('none');
        headerFavorites.classList.remove('none');
        searchBtn.classList.remove('search__btn_active');
        document.querySelector('.btn-search-reset').style.display = 'none';
        document.querySelector('.header__search-form-icon').style.left = '0';

        if (!headerModalThree.classList.contains('header-menu-modal3-active')) {
            document.body.style.overflow = "hidden";
            headerModalThree.classList.add('header-menu-modal3-active');
            inputSaerch.classList.add('search__active-input');
            headerSearch.classList.add('header__search_active');

            headerLogo.classList.add('none');
            headerUser.classList.add('none');
            headerContactUs.classList.add('none');
            headerFavorites.classList.add('none');
            searchBtn.classList.add('search__btn_active');

            document.querySelector('.btn-search-reset').style.display = 'flex';
            document.querySelector('.header__search-form-icon').style.left = '133px';
        } else {
            document.body.style.overflow = "";

            headerModalThree.classList.remove('header-menu-modal3-active');
            navLinkTwo.classList.remove('navigation__link-active');
            navLinkOne.classList.remove('navigation__link-active');
            openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
            openModalBtnOneLink.classList.remove('navigation__link_drd-active');
            headerModalOne.classList.remove('header-menu-modal-active');
            headerModalTwo.classList.remove('header-menu-modal2-active');
        }

        // document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        // navLinkTwo.classList.remove('navigation__link-active');
        // navLinkOne.classList.remove('navigation__link-active');
        // openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
        // openModalBtnOneLink.classList.remove('navigation__link_drd-active');
        // headerModalOne.classList.remove('header-menu-modal-active');
        // headerModalTwo.classList.remove('header-menu-modal2-active');
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
        document.body.style.paddingRight = "";
        headerModalThree.classList.remove('header-menu-modal3-active');
        document.querySelector('.btn-search-reset').style.display = 'none';
        document.querySelector('.header__search-form-icon').style.left = '0';

        document.querySelector('.main').classList.remove('main-overlay');
        if (breadcrumbsElement != null) {
            document.querySelector('.breadcrumbs').classList.remove('main-overlay');
        }
    })
})

function updateStyles() {
    let widthBrauser = window.innerWidth;
    console.log(widthBrauser);
    if (widthBrauser > 900) {

        // закрепленте Header при скроле
        const header = document.querySelector(".header");
        const headerTop = document.querySelector(".header__top");
        const headerDown = document.querySelector(".header__down");
        const headerMenu = document.querySelector(".header__menu");
        const hero = document.querySelector(".hero");
        const headerModal = document.querySelector(".header-menu-modal");
        // const headerModalClosesBtn = document.querySelector(".menu-close-btn");


        // const menuBtn3 = document.querySelector('.menu');
        // const searchInputStyle = document.querySelector('.header__search');


        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY;// Величина скролла
            let headerTopHeight = headerTop.clientHeight; //Высота блока Топ хедера
            let headerMenuHeight = headerMenu.clientHeight; //Высота блока Меню хедера
            let headerInputSearch = document.querySelector('.search-input');
            // console.log(headerInputSearch);


            const menuBtn3 = document.querySelector('.menu');
            // console.log(headerTopHeight);

            const searchInputStyle = document.querySelector('.header__search');

            // console.log(headerMenuHeight, scrollTop);

            if (scrollTop >= headerTopHeight) {
                // console.log("ghbdtn");
                header.style.marginTop = `-${headerTopHeight}px`;
                headerMenu.classList.add('header__menu_hidden');
                header.classList.add('header_fixed');
                let headerHeight = header.clientHeight; //Высота всего хедера
                document.body.style.marginTop = `${headerHeight}px`;
                headerModal.style.height = `100%`;
                /////////
                searchInputStyle.classList.add('header__search_menu');
                menuBtn3.classList.add('menu_menu');
                /////
                headerDown.classList.add('header__down_gray');
                headerInputSearch.classList.add('search-input_gray');

            } else {
                headerMenu.classList.remove('header__menu_hidden');
                // headerMenu.classList.remove('header__menu-active');

                searchInputStyle.classList.remove('header__search_menu');
                menuBtn3.classList.remove('menu_menu');

                header.classList.remove('header_fixed');
                header.style.marginTop = 0;
                document.body.style.marginTop = 0;
                headerModal.style.height = `100%`;
                ////
                headerDown.classList.remove('header__down_gray');
                headerInputSearch.classList.remove('search-input_gray');
            }
        })

        const menuBtn3 = document.querySelector('.menu');
        // console.log(menuBtn3);

        const searchInputStyle = document.querySelector('.header__search');

        menuBtn3.addEventListener('click', () => {
            console.log('click: ');

            headerMenu.classList.toggle('header__menu_hidden');
        })

        // headerModalClosesBtn.addEventListener('click', () => {
        //     headerMenu.classList.add('header__menu_hidden');
        // })
    } else {
        const header = document.querySelector(".header");
        const menu1 = document.getElementById('menu');
        const headerAddress = document.getElementById('header-address');
        const headerContacts = document.getElementById('header-contacts');
        const headerMenuDrop = document.getElementById('header-menu');
        const btnOpenAndCloseMenu = document.getElementById('menu');

        menu1.classList.add('menu_menu');
        const containerTopHeader = document.querySelector('.header__container-top');

        containerTopHeader.prepend(menu1);
        headerMenuDrop.appendChild(headerContacts);
        headerContacts.appendChild(headerAddress);

        btnOpenAndCloseMenu.addEventListener('click', (e) => {
            headerMenuDrop.classList.toggle('header__menu-mobile--open');
            btnOpenAndCloseMenu.classList.toggle('menu-open');
            document.querySelector('.menu__svg-desctop').classList.toggle('none');
            document.querySelector('.menu__svg-mobile').classList.toggle('none');
            document.body.classList.toggle('body-overflow-hidden');
            header.classList.toggle('header-mobile-height');
        })
    }
}

window.addEventListener('load', updateStyles);
window.addEventListener('resize', updateStyles);


































