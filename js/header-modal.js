document.addEventListener('DOMContentLoaded', () => {
    // открытие модальных окон
    const headerModalOne = document.querySelector(".header-menu-modal");
    const headerModalTwo = document.querySelector(".header-menu-modal2");
    const headerModalThree = document.querySelector(".header-menu-modal3");
    const openModalBtnOne = document.querySelector(".modal-one");
    const openModalBtnOneLink = openModalBtnOne.querySelector(".navigation__link_drd");
    const openModalBtnTwo = document.querySelector(".modal-two");
    const openModalBtnTwoLink = openModalBtnTwo.querySelector(".navigation__link_drd");
    // const closeModalBtn = document.querySelector(".header-menu-modal__close-btn");
    const closeModalBtnThree = document.querySelector(".close-modal-search-button");
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
            }

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
        document.querySelector('.header__search-form-icon').style.display = 'flex';
        headerLogo.classList.remove('none');
        headerUser.classList.remove('none');
        headerContactUs.classList.remove('none');
        headerFavorites.classList.remove('none');
        navLinkTwo.classList.remove('navigation__link-active');
        openModalBtnTwoLink.classList.remove('navigation__link_drd-active');

    });
    // closeModalBtn.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     navLinkOne.classList.remove('navigation__link-active');
    //     openModalBtnOneLink.classList.remove('navigation__link_drd-active');
    //     headerModalOne.classList.remove('header-menu-modal-active');
    //     headerModalThree.classList.remove('header-menu-modal3-active');

    //     document.body.style.overflow = "";
    //     document.body.style.paddingRight = "";

    //     document.querySelector('.main').classList.remove('main-overlay');
    //     if (breadcrumbsElement != null) {
    //         document.querySelector('.breadcrumbs').classList.remove('main-overlay');
    //     }
    // });

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
        document.querySelector('.header__search-form-icon').style.display = 'flex';
        headerLogo.classList.remove('none');
        headerUser.classList.remove('none');
        headerContactUs.classList.remove('none');
        headerFavorites.classList.remove('none');

        headerModalThree.classList.remove('header-menu-modal3-active');
    });

    openSearchBtn.addEventListener('click', (e) => {
        // e.preventDefault();
        closeModalBtnThree.style.display = 'block';
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
        document.querySelector('.btn-search-reset').style.display = 'flex';
        document.querySelector('.header__search-form-icon').style.display = 'none';

        if (!headerModalThree.classList.contains('header-menu-modal3-active')) {
            document.body.style.overflow = "hidden";
            headerModalThree.classList.add('header-menu-modal3-active');
            inputSaerch.classList.add('search__active-input');
            headerSearch.classList.add('header__search_active');
            headerLogo.classList.add('none');
            searchBtn.classList.add('search__btn_active');
            document.querySelector('.btn-search-reset').style.display = 'flex';
            document.querySelector('.header__search-form-icon').style.display = 'none';
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

        document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
    });

    closeModalBtnThree.addEventListener('click', (e) => {
        e.preventDefault();
        closeModalBtnThree.style.display = 'none';
        inputSaerch.classList.remove('search__active-input');
        inputSaerch.value = '';
        headerSearch.classList.remove('header__search_active');
        searchBtn.classList.remove('search__btn_active');
        headerLogo.classList.remove('none');
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        headerModalThree.classList.remove('header-menu-modal3-active');
        document.querySelector('.btn-search-reset').style.display = 'none';
        document.querySelector('.header__search-form-icon').style.display = 'flex';


        document.querySelector('.main').classList.remove('main-overlay');
        if (breadcrumbsElement != null) {
            document.querySelector('.breadcrumbs').classList.remove('main-overlay');
        }
    })

    // изменение header
    class HeaderManager {
        constructor() {
            this.header = document.querySelector(".header");
            this.headerTop = document.querySelector(".header__top");
            this.headerMenu = document.querySelector(".header__menu");
            this.searchInputStyle = document.querySelector('.header__search');
            this.menuBtn3 = document.querySelector('.menu');
            this.headerDown = document.querySelector('.header__down');
            this.headerInputSearch = document.querySelector('.search-input');
            this.headerModal = document.querySelector('.header-menu-modal');
            this.desktopMediaQuery = window.matchMedia('(min-width: 901px)');
            this.mobileMediaQuery = window.matchMedia('(max-width: 900px)');
            this.init();
        }

        init() {
            this.setupMediaQueryListeners();
            this.updateStyles();
        }

        setupMediaQueryListeners() {
            this.desktopMediaQuery.addListener(() => this.updateStyles());
            this.mobileMediaQuery.addListener(() => this.updateStyles());
        }

        updateStyles() {
            if (this.desktopMediaQuery.matches) {
                this.cleanupMobileHeader();
                this.setupDesktopHeader();
            } else if (this.mobileMediaQuery.matches) {
                this.cleanupDesktopHeader();
                this.setupMobileHeader();
            }
        }

        setupDesktopHeader() {
            window.addEventListener('scroll', this.handleScroll);
            this.menuBtn3.addEventListener('click', this.toggleMenu);
        }

        cleanupDesktopHeader() {
            window.removeEventListener('scroll', this.handleScroll);
            this.menuBtn3.removeEventListener('click', this.toggleMenu);
        }

        handleScroll = () => {
            const scrollTop = window.scrollY;
            const headerTopHeight = this.headerTop.clientHeight;

            if (scrollTop >= headerTopHeight) {
                this.header.style.marginTop = `-${headerTopHeight}px`;
                this.headerMenu.classList.add('header__menu_hidden');
                this.header.classList.add('header_fixed');
                document.body.style.marginTop = `${this.header.clientHeight}px`;
                this.headerModal.style.height = `100%`;
                this.searchInputStyle.classList.add('header__search_menu');
                this.menuBtn3.classList.add('menu_menu');
                this.headerDown.classList.add('header__down_gray');
                this.headerInputSearch.classList.add('search-input_gray');
            } else {
                this.headerMenu.classList.remove('header__menu_hidden');
                this.searchInputStyle.classList.remove('header__search_menu');
                this.menuBtn3.classList.remove('menu_menu');
                this.header.classList.remove('header_fixed');
                this.header.style.marginTop = 0;
                document.body.style.marginTop = 0;
                this.headerModal.style.height = `100%`;
                this.headerDown.classList.remove('header__down_gray');
                this.headerInputSearch.classList.remove('search-input_gray');
            }
        };

        toggleMenu = () => {
            this.headerMenu.classList.toggle('header__menu_hidden');
        };

        setupMobileHeader() {
            const menu1 = document.getElementById('menu');
            const headerAddress = document.getElementById('header-address');
            const headerContacts = document.getElementById('header-contacts');
            const headerMenuDrop = document.getElementById('header-menu');
            const headerMenuDropMobile = document.getElementById('header-menu-mobile');
            const btnOpenAndCloseMenu = document.getElementById('menu');
            const containerTopHeader = document.querySelector('.header__container-top');

            menu1.classList.add('menu_menu');
            containerTopHeader.prepend(menu1);
            headerMenuDropMobile.appendChild(headerContacts);
            headerContacts.appendChild(headerAddress);

            btnOpenAndCloseMenu.addEventListener('click', this.toggleMobileMenu);
        }

        cleanupMobileHeader() {
            const btnOpenAndCloseMenu = document.getElementById('menu');
            btnOpenAndCloseMenu.removeEventListener('click', this.toggleMobileMenu);
        }

        toggleMobileMenu = () => {
            // const headerMenuDrop = document.getElementById('header-menu');
            const headerMenuDropMobile = document.getElementById('header-menu-mobile');
            const btnOpenAndCloseMenu = document.getElementById('menu');

            headerMenuDropMobile.classList.toggle('header__menu-mobile--open');
            btnOpenAndCloseMenu.classList.toggle('menu-open');
            document.querySelector('.menu__svg-desctop').classList.toggle('none');
            document.querySelector('.menu__svg-mobile').classList.toggle('none');
            document.body.classList.toggle('body-overflow-hidden');
            this.header.classList.toggle('header-mobile-height');
        };
    }

    // Инициализация
    const headerManager = new HeaderManager();
})







