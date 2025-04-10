// // новый вариант
// document.addEventListener('DOMContentLoaded', function () {
//     // Общие элементы управления модальными окнами
//     const modal = document.querySelector('.modals');
//     const overlayClose = document.querySelector('.modals__wrapper');
//     const body = document.body;

//     // Функции для управления модальными окнами
//     const modalManager = {
//         // Открытие модального окна
//         openModal(modalElement) {
//             modal.classList.add('modals_opened');
//             modalElement.classList.remove('none');

//             // Фиксация страницы
//             const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
//             body.style.overflow = 'hidden';
//             body.style.paddingRight = `${scrollbarWidth}px`;
//         },

//         // Закрытие модального окна
//         closeModal(modalElement) {
//             modal.classList.remove('modals_opened');
//             if (modalElement) modalElement.classList.add('none');

//             // Восстановление страницы
//             body.style.overflow = '';
//             body.style.paddingRight = '';
//         },

//         // Инициализация обработчиков
//         initModal(trigger, modalElement, closeButton) {
//             if (!trigger || !modalElement) return;

//             trigger.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 this.openModal(modalElement);
//             });

//             if (closeButton) {
//                 closeButton.addEventListener('click', () => {
//                     this.closeModal(modalElement);
//                 });
//             }
//         }
//     };

//     // Инициализация модалки "Представительство"
//     const initRepresentationModal = () => {
//         const comPredl = document.querySelector('.kom-pred__btn');
//         const modalFormRepresentation = modal.querySelector('.modals-form-representation');
//         const closeBtn = document.querySelector('.anketa-close');

//         modalManager.initModal(
//             comPredl,
//             modalFormRepresentation,
//             closeBtn
//         );

//         // Закрытие по клику вне модалки (чистый JavaScript)
//         if (overlayClose) {
//             overlayClose.addEventListener('click', (e) => {
//                 if (e.target === overlayClose) {
//                     modalManager.closeModal(modalFormRepresentation);
//                 }
//             });
//         }
//     };

//     // Инициализация модалки для страницы дилеров
//     // const initDealersModal = () => {
//     //     const dealerButtons = document.querySelectorAll('.compred__btn');
//     //     const modalFormRepresentation = modal.querySelector('.modals-form-representation');
//     //     const closeBtn = document.querySelector('.anketa-close');
//     //
//     //     if (dealerButtons.length) {
//     //         dealerButtons.forEach(btn => {
//     //             modalManager.initModal(
//     //                 btn,
//     //                 modalFormRepresentation,
//     //                 closeBtn
//     //             );
//     //         });
//     //     }
//     // };

//     // Инициализация всех модалок
//     const initAllModals = () => {
//         initRepresentationModal();
//         // initDealersModal();

//         // Здесь можно добавить инициализацию других модалок
//         // initCatalogModal();
//         // initZakazModal();
//     };

//     // Запуск инициализации
//     initAllModals();
// });