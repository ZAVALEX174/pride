// document.addEventListener('DOMContentLoaded', function () {
//
//     const modal = document.querySelector('.modals');
//     const downloadBtn = document.querySelector('.header-menu-modal__body-top-link_down');
//     const modalCatalog = modal.querySelector('.modals-catalog');
//     const closeDownloadBtn = modal.querySelector('.modals-catalog__btn-download');
//     const modalForm = modal.querySelector('.modals-connection');
//     const modalFormZakaz = modal.querySelector('.modals-zakaz');
//     const closesModalFormZakaz = modalFormZakaz.querySelector('.modals-zakaz__btn');
//     const modalFormRepresentation = modal.querySelector('.modals-form-representation');
//     const closesFormRepresentation = modalFormZakaz.querySelector('.modals-zakaz__btn');
//     const openModalFormPepresentationBtn = document.querySelector('.swiper-filter-on__header-link');
//     const closeModalFormPepresentationBtn = document.querySelector('.anketa-close');
//     const comPredl = document.querySelector('.kom-pred__btn');
//     const overlayClose = document.querySelector('.modals__wrapper');
//     const modalFormOtzivi = modal.querySelector('.modals-form-representation-otzivi');
//
//
//     // downloadBtn.addEventListener('click', () => {
//     //     modal.classList.add('modals_opened');
//     //     modalCatalog.classList.remove('none');
//     // })
//
//     // closeDownloadBtn.addEventListener('click', () => {
//     //     modal.classList.remove('modals_opened');
//     //     modalCatalog.classList.add('none');
//     // })
//
//     // const openFormBtn = document.querySelectorAll('.benefits__desc-btn');
//     // openFormBtn.forEach(el => {
//     //     el.addEventListener('click', (e) => {
//     //         e.preventDefault();
//     //         modal.classList.add('modals_opened');
//     //         modalFormZakaz.classList.remove('none');
//     //     })
//     // })
//
//     // closesModalFormZakaz.addEventListener('click', (e) => {
//     //     e.preventDefault();
//
//     //     modal.classList.remove('modals_opened');
//     //     modalFormZakaz.classList.add('none');
//     // })
//
//     // пока закомитил
//
//     if (comPredl) {
//         comPredl.addEventListener('click', (e) => {
//             e.preventDefault();
//             modal.classList.add('modals_opened');
//             // modalFormZakaz.classList.remove('none');
//             modalFormRepresentation.classList.remove('none');
//
//
//             // Фиксируем ширину страницы
//             const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
//             document.body.style.overflow = 'hidden'; // Отключаем скролл страницы
//             document.body.style.paddingRight = `${scrollbarWidth}px`; // Компенсируем ширину скролла
//
//         })
//
//
//         closeModalFormPepresentationBtn.addEventListener('click', () => {
//             modal.classList.remove('modals_opened');
//             modalFormRepresentation.classList.add('none');
//
//             // Восстанавливаем ширину страницы
//             document.body.style.overflow = ''; // Включаем скролл страницы
//             document.body.style.paddingRight = ''; // Убираем компенсацию ширины скролла
//         })
//
//
//         $(document).click(function (e) {
//             if ($(e.target).is('.modals__wrapper')) {
//                 modal.classList.remove('modals_opened');
//                 modalFormRepresentation.classList.add('none');
//                 // modalFormOtzivi.classList.add('none');
//                 // Восстанавливаем ширину страницы
//                 document.body.style.overflow = 'hidden'; // Включаем скролл страницы
//                 document.body.style.paddingRight = ''; // Убираем компенсацию ширины скролла
//             }
//         });
//     }
// });
//
// // dealers-page
// let comPredlDealersPage = document.querySelectorAll('.compred__btn');
//
// if (comPredlDealersPage) {
//     console.log(comPredlDealersPage);
//     const modal = document.querySelector('.modals');
//     const modalFormRepresentation = modal.querySelector('.modals-form-representation');
//     const closeModalFormPepresentationBtn = document.querySelector('.anketa-close');
//
//     comPredlDealersPage.forEach((item) => {
//
//         item.addEventListener('click', (e) => {
//             e.preventDefault();
//             modal.classList.add('modals_opened');
//             // modalFormZakaz.classList.remove('none');
//             modalFormRepresentation.classList.remove('none');
//
//         })
//     })
//
//     closeModalFormPepresentationBtn.addEventListener('click', () => {
//         modal.classList.remove('modals_opened');
//         modalFormRepresentation.classList.add('none');
//     })
//
//
//     $(document).click(function (e) {
//         if ($(e.target).is('.modals__wrapper')) {
//             modal.classList.remove('modals_opened');
//             modalFormRepresentation.classList.add('none');
//             // modalFormOtzivi.classList.add('none');
//         }
//     });
// }


// новый вариант
document.addEventListener('DOMContentLoaded', function () {
    // Общие элементы управления модальными окнами
    const modal = document.querySelector('.modals');
    const overlayClose = document.querySelector('.modals__wrapper');
    const body = document.body;

    // Функции для управления модальными окнами
    const modalManager = {
        // Открытие модального окна
        openModal(modalElement) {
            modal.classList.add('modals_opened');
            modalElement.classList.remove('none');

            // Фиксация страницы
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            body.style.overflow = 'hidden';
            body.style.paddingRight = `${scrollbarWidth}px`;
        },

        // Закрытие модального окна
        closeModal(modalElement) {
            modal.classList.remove('modals_opened');
            if (modalElement) modalElement.classList.add('none');

            // Восстановление страницы
            body.style.overflow = '';
            body.style.paddingRight = '';
        },

        // Инициализация обработчиков
        initModal(trigger, modalElement, closeButton) {
            if (!trigger || !modalElement) return;

            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal(modalElement);
            });

            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    this.closeModal(modalElement);
                });
            }
        }
    };

    // Инициализация модалки "Представительство"
    const initRepresentationModal = () => {
        const comPredl = document.querySelector('.kom-pred__btn');
        const modalFormRepresentation = modal.querySelector('.modals-form-representation');
        const closeBtn = document.querySelector('.anketa-close');

        modalManager.initModal(
            comPredl,
            modalFormRepresentation,
            closeBtn
        );

        // Закрытие по клику вне модалки (чистый JavaScript)
        if (overlayClose) {
            overlayClose.addEventListener('click', (e) => {
                if (e.target === overlayClose) {
                    modalManager.closeModal(modalFormRepresentation);
                }
            });
        }
    };

    // Инициализация модалки для страницы дилеров
    const initDealersModal = () => {
        const dealerButtons = document.querySelectorAll('.compred__btn');
        const modalFormRepresentation = modal.querySelector('.modals-form-representation');
        const closeBtn = document.querySelector('.anketa-close');

        if (dealerButtons.length) {
            dealerButtons.forEach(btn => {
                modalManager.initModal(
                    btn,
                    modalFormRepresentation,
                    closeBtn
                );
            });
        }
    };

    // Инициализация всех модалок
    const initAllModals = () => {
        initRepresentationModal();
        initDealersModal();

        // Здесь можно добавить инициализацию других модалок
        // initCatalogModal();
        // initZakazModal();
    };

    // Запуск инициализации
    initAllModals();
});