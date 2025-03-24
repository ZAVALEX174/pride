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
            // document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.body.style.paddingRight = `0px`;
            document.querySelector('.main').classList.remove('main-overlay');

            if (breadcrumbsElement != null) {
                document.querySelector('.breadcrumbs').classList.remove('main-overlay');
            }

        } else {
            headerModalOne.classList.add('header-menu-modal-active');
            navLinkOne.classList.add('navigation__link-active');
            headerModalTwo.classList.remove('header-menu-modal2-active');
            headerModalThree.classList.remove('header-menu-modal3-active');
            // document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
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

    openModalBtnTwo.addEventListener("click", (e) => {
        e.preventDefault();

// получение координат кнопки меню О компании
        const menuLinkTwo = document.querySelector('.header-menu-modal2');
        const elementModalTwo = document.querySelector('.modal-two');
        let xPosition = elementModalTwo.offsetLeft;
        // console.log(xPosition);
        menuLinkTwo.style.left = `${xPosition}px`;

        headerModalOne.classList.remove('header-menu-modal-active');
        navLinkOne.classList.remove('navigation__link-active');
        openModalBtnOneLink.classList.remove('navigation__link_drd-active');

        if (headerModalTwo.classList.contains('header-menu-modal2-active')) {
            headerModalTwo.classList.remove('header-menu-modal2-active');
            navLinkTwo.classList.remove('navigation__link-active');
            openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
            headerModalThree.classList.remove('header-menu-modal3-active');

            // document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.documentElement.style.paddingRight = `0px`;

            document.querySelector('.main').classList.remove('main-overlay');
            if (breadcrumbsElement != null) {
                document.querySelector('.breadcrumbs').classList.remove('main-overlay');
            }

        } else {
            headerModalTwo.classList.add('header-menu-modal2-active');
            navLinkTwo.classList.add('navigation__link-active');
            openModalBtnTwoLink.classList.add('navigation__link_drd-active');
            // document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            // document.documentElement.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;

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
            headerModalThree.classList.add('header-menu-modal3-active');
            inputSaerch.classList.add('search__active-input');
            headerSearch.classList.add('header__search_active');
            headerLogo.classList.add('none');
            searchBtn.classList.add('search__btn_active');
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.documentElement.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            document.querySelector('.btn-search-reset').style.display = 'flex';
            document.querySelector('.header__search-form-icon').style.display = 'none';
        } else {
            headerModalThree.classList.remove('header-menu-modal3-active');
            navLinkTwo.classList.remove('navigation__link-active');
            navLinkOne.classList.remove('navigation__link-active');
            openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
            openModalBtnOneLink.classList.remove('navigation__link_drd-active');
            headerModalOne.classList.remove('header-menu-modal-active');
            headerModalTwo.classList.remove('header-menu-modal2-active');

            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.documentElement.style.paddingRight = `0px`;
        }
    });

    closeModalBtnThree.addEventListener('click', (e) => {
        e.preventDefault();
        closeModalBtnThree.style.display = 'none';
        inputSaerch.classList.remove('search__active-input');
        inputSaerch.value = '';
        headerSearch.classList.remove('header__search_active');
        searchBtn.classList.remove('search__btn_active');
        headerLogo.classList.remove('none');
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.documentElement.style.paddingRight = `0px`;
        headerModalThree.classList.remove('header-menu-modal3-active');
        document.querySelector('.btn-search-reset').style.display = 'none';
        document.querySelector('.header__search-form-icon').style.display = 'flex';

        document.querySelector('.main').classList.remove('main-overlay');
        if (breadcrumbsElement != null) {
            document.querySelector('.breadcrumbs').classList.remove('main-overlay');
        }

        document.removeEventListener('click', handleClickOutside);
    })

    // закрытие по клику вне окна
    const handleClickOutside = (event) => {
        const isModalOneActive = headerModalOne.classList.contains('header-menu-modal-active');
        const isModalTwoActive = headerModalTwo.classList.contains('header-menu-modal2-active');
        const isModalThreeActive = headerModalThree.classList.contains('header-menu-modal3-active');

        // Проверяем клик вне всех модалок и их триггеров
        const isClickOutside =
            !event.target.closest('.header-menu-modal') &&
            !event.target.closest('.header-menu-modal2') &&
            !event.target.closest('.header-menu-modal3') &&
            !event.target.closest('.modal-one') &&
            !event.target.closest('.modal-two') &&
            !event.target.closest('.search');

        if (isClickOutside) {
            if (isModalOneActive) {
                headerModalOne.classList.remove('header-menu-modal-active');
                navLinkOne.classList.remove('navigation__link-active');
                openModalBtnOneLink.classList.remove('navigation__link_drd-active');
            }

            if (isModalTwoActive) {
                headerModalTwo.classList.remove('header-menu-modal2-active');
                navLinkTwo.classList.remove('navigation__link-active');
                openModalBtnTwoLink.classList.remove('navigation__link_drd-active');
            }

            if (isModalThreeActive) {
                headerModalThree.classList.remove('header-menu-modal3-active');
                inputSaerch.classList.remove('search__active-input');
                headerSearch.classList.remove('header__search_active');
                searchBtn.classList.remove('search__btn_active');
            }

            if (isModalOneActive || isModalTwoActive || isModalThreeActive) {
                document.documentElement.style.overflow = "";
                document.body.style.overflow = "";
                document.documentElement.style.paddingRight = `0px`;
                document.querySelector('.main').classList.remove('main-overlay');
                closeModalBtnThree.style.display = 'none';
                document.querySelector('.btn-search-reset').style.display = 'none';
                document.querySelector('.header__search-form-icon').style.display = 'flex';

                if (breadcrumbsElement) {
                    document.querySelector('.breadcrumbs').classList.remove('main-overlay');
                    document.documentElement.style.overflow = "";
                    document.body.style.overflow = "";
                    document.documentElement.style.paddingRight = `0px`;
                }
            }

            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.documentElement.style.paddingRight = `0px`;
        }
    };

    // Добавляем обработчик при открытии любой модалки
    const modals = [openModalBtnOne, openModalBtnTwo, openSearchBtn];
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            e.preventDefault();
            document.addEventListener('click', handleClickOutside);
        });
    });

// Удаляем обработчик при закрытии через кнопки
    [closeModalBtnThree].forEach(btn => {
        btn.addEventListener('click', () => {
            document.removeEventListener('click', handleClickOutside);
        });
    });


    // изменение header  
    class HeaderManager {
        constructor() {
            // Получаем элементы DOM
            this.header = document.querySelector(".header");
            this.headerTop = document.querySelector(".header__top");
            this.headerMenu = document.querySelector(".header__menu");
            this.searchInputStyle = document.querySelector('.header__search');
            this.searchBtn = document.querySelector('.search');
            this.menuBtn3 = document.querySelector('.menu');
            this.headerDown = document.querySelector('.header__down');
            this.headerInputSearch = document.querySelector('.search-input');
            this.headerModal = document.querySelector('.header-menu-modal');
            this.headerLogo = document.querySelector('.header__logo');
            this.btnCloseSearch = document.querySelector('.close-modal-search-button');
            this.langue = document.querySelector('.header__lang');

            // Медиа-запросы
            this.desktopMediaQuery = window.matchMedia('(min-width: 901px)');
            this.mobileMediaQuery = window.matchMedia('(max-width: 900px)');

            // Инициализация
            this.init();
        }

        init() {
            this.setupMediaQueryListeners();
            this.updateStyles();
            this.setupSearchButton();
            this.closeSetupSearchButton();
        }

        setupMediaQueryListeners() {
            // Обработчики изменения размера экрана
            this.desktopMediaQuery.addListener(() => this.updateStyles());
            this.mobileMediaQuery.addListener(() => this.updateStyles());
        }

        updateStyles() {
            // Адаптация стилей в зависимости от размера экрана
            if (this.desktopMediaQuery.matches) {
                this.cleanupMobileHeader();
                this.setupDesktopHeader();
                this.showAdditionalBlocks(); // Показываем элементы при переходе на десктоп
            } else if (this.mobileMediaQuery.matches) {
                this.cleanupDesktopHeader();
                this.setupMobileHeader();
            }
        }

        setupSearchButton() {
            // Обработчик для кнопки поиска
            if (this.searchBtn) {
                this.searchBtn.addEventListener('click', () => {
                    if (window.innerWidth <= 900) { // Проверка ширины экрана
                        this.removeAdditionalBlocks();
                    }
                });
            }
        }

        closeSetupSearchButton() {
            // Обработчик для кнопки закрытия поиска
            if (this.btnCloseSearch) {
                this.btnCloseSearch.addEventListener('click', this.showAdditionalBlocks);
            }
        }

        removeAdditionalBlocks = () => {
            // Скрытие элементов при активации поиска (только для мобильных устройств)
            if (this.headerLogo) this.headerLogo.style.display = "none";
            if (this.langue) this.langue.style.marginRight = "114px";

            const headerUser = document.querySelector('.header__user');
            const headerFavorites = document.querySelector('.header__favorites');

            if (headerUser) headerUser.style.display = "none";
            if (headerFavorites) headerFavorites.style.display = "none";
        };

        showAdditionalBlocks = () => {
            // Показ скрытых элементов
            if (this.headerLogo) this.headerLogo.style.display = "block";
            if (this.langue) this.langue.style.marginRight = "0px";

            const headerUser = document.querySelector('.header__user');
            const headerFavorites = document.querySelector('.header__favorites');

            if (headerUser) headerUser.style.display = "block";
            if (headerFavorites) headerFavorites.style.display = "block";
        };

        setupDesktopHeader() {
            // Настройка десктопной версии
            window.addEventListener('scroll', this.handleScroll);
            this.menuBtn3.addEventListener('click', this.toggleMenu);
        }

        cleanupDesktopHeader() {
            // Очистка обработчиков десктопной версии
            window.removeEventListener('scroll', this.handleScroll);
            this.menuBtn3.removeEventListener('click', this.toggleMenu);
        }

        handleScroll = () => {
            // Обработчик скролла
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
                this.header.style.marginTop = "0";
                document.body.style.marginTop = "0";
                this.headerModal.style.height = `100%`;
                this.headerDown.classList.remove('header__down_gray');
                this.headerInputSearch.classList.remove('search-input_gray');
            }
        };

        toggleMenu = () => {
            // Переключение меню
            this.headerMenu.classList.toggle('header__menu_hidden');
        };

        setupMobileHeader() {
            // Настройка мобильной версии
            const menu1 = document.getElementById('menu');
            const headerMenuDropMobile = document.getElementById('header-menu-mobile');
            const containerTopHeader = document.querySelector('.header__container-top');

            if (menu1 && headerMenuDropMobile && containerTopHeader) {
                menu1.classList.add('menu_menu');
                containerTopHeader.prepend(menu1);
                menu1.addEventListener('click', this.toggleMobileMenu);
            }
        }

        cleanupMobileHeader() {
            // Очистка обработчиков мобильной версии
            const btnOpenAndCloseMenu = document.getElementById('menu');
            if (btnOpenAndCloseMenu) {
                btnOpenAndCloseMenu.removeEventListener('click', this.toggleMobileMenu);
            }
        }

        toggleMobileMenu = () => {
            // Переключение мобильного меню
            const headerMenuDropMobile = document.getElementById('header-menu-mobile');
            const btnOpenAndCloseMenu = document.getElementById('menu');

            if (headerMenuDropMobile && btnOpenAndCloseMenu) {
                headerMenuDropMobile.classList.toggle('header__menu-mobile--open');
                btnOpenAndCloseMenu.classList.toggle('menu-open');
                document.querySelector('.menu__svg-desctop').classList.toggle('none');
                document.querySelector('.menu__svg-mobile').classList.toggle('none');
                document.body.classList.toggle('body-overflow-hidden');
                this.header.classList.toggle('header-mobile-height');
            }
        };
    }

    // Инициализация
    const headerManager = new HeaderManager();



    document.querySelectorAll('.cart-switch__item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const link = this.closest('.catalog-categories__body-item').querySelector('.after-link');
            if (link) {
                // Открываем ссылку в новой вкладке как при обычном клике
                window.open(link.href, link.target || '_self');
            }
        });
    });

    document.querySelectorAll('.cart-switch__item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const link = this.closest('.swiper-slide').querySelector('.after-link');
            if (link) {
                // Открываем ссылку в новой вкладке как при обычном клике
                window.open(link.href, link.target || '_self');
            }
        });
    });


    document.querySelectorAll('.cart-switch__item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const link = this.closest('.choice-slider-slide').querySelector('.after-link');
            if (link) {
                // Открываем ссылку в новой вкладке как при обычном клике
                window.open(link.href, link.target || '_self');
            }
        });
    });

    document.querySelectorAll('.other__body-item').forEach(item => {
        // Клик по основной области (кроме кнопки)
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // Проверяем, не кликнули ли мы по кнопке
            if(!e.target.closest('.other__body-cart-btn')) {
                const link = this.querySelector('.after-link');
                if(link && link.href !== '#') {
                    window.open(link.href, link.target || '_self');
                }
            }
        });

        // Клик по кнопке "Перейти"
        const btn = item.querySelector('.other__body-cart-btn');
        if(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation(); // Останавливаем всплытие
                window.open(this.href, this.target || '_self');
            });
        }
    });

    document.querySelectorAll('.categories__body-swiper-content-slider-slide').forEach(item => {
        // Клик по основной области (кроме кнопки)
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // Проверяем, не кликнули ли мы по кнопке
            if(!e.target.closest('.categories__body-cart-btn')) {
                const link = this.querySelector('.after-link');
                if(link && link.href !== '#') {
                    window.open(link.href, link.target || '_self');
                }
            }
        });

        // Клик по кнопке "Перейти"
        const btn = item.querySelector('.categories__body-cart-btn');
        if(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation(); // Останавливаем всплытие
                window.open(this.href, this.target || '_self');
            });
        }
    });

    document.querySelectorAll('.work__body-swiper-content-slider-slide').forEach(item => {
        // Клик по основной области (кроме кнопки)
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // Проверяем, не кликнули ли мы по кнопке
            if(!e.target.closest('.work__body-cart-btn')) {
                const link = this.querySelector('.after-link');
                if(link && link.href !== '#') {
                    window.open(link.href, link.target || '_self');
                }
            }
        });

        // Клик по кнопке "Перейти"
        const btn = item.querySelector('.work__body-cart-btn');
        if(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation(); // Останавливаем всплытие
                window.open(this.href, this.target || '_self');
            });
        }
    });

    document.querySelectorAll('.our-projects-slide.gray').forEach(item => {
        // Клик по основной области (кроме кнопки)
        item.addEventListener('click', function(e) {
            e.preventDefault();
            // Проверяем, не кликнули ли мы по кнопке
            if(!e.target.closest('.our-projects-cart__btn-details') && !e.target.closest('.cart__btn_progects.our-projects-cart__btn')) {
                const link = this.querySelector('.after-link');
                if(link && link.href !== '#') {
                    window.open(link.href, link.target || '_self');
                }
            }
        });

        // Клик по кнопке "Перейти"
        const btn = item.querySelector('.our-projects-cart__btn-details');
        if(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation(); // Останавливаем всплытие
                window.open(this.href, this.target || '_self');
            });
        }

        const btn2 = item.querySelector('.cart__btn_progects.our-projects-cart__btn');
        if(btn2) {
            btn2.addEventListener('click', function(e) {
                e.stopPropagation(); // Останавливаем всплытие
                window.open(this.href, this.target || '_self');
            });
        }
    });
})







