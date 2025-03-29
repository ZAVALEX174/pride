document.addEventListener('DOMContentLoaded', function () {

    const modal = document.querySelector('.modals');
    const modalFormOtzivi = document.getElementById('modal-otzivi');
    const openModalFormOtziviBtns = document.querySelectorAll('.our-projects-cart__btn-open-modal-form');

    const modalFormRepresentation = document.getElementById('modal-payment');
    const modalFormApplication = document.getElementById('modal-application');
    const modalReset = modal.querySelector('.modal-reset');
    const modalResetBtn = modal.querySelector('.modal-reset__btn');
    const closeModalResetBtn = modal.querySelector('.modal-reset__close');
    const modalsConnection = document.getElementById('modal-contacts');
    closeBtns = document.querySelectorAll('.anketa-close')

    // const closesFormRepresentation = modalFormZakaz.querySelector('.modals-zakaz__btn');
    const openModalFormPepresentationBtn = document.querySelector('.banner__btn');
    const nonStandaetbtn = document.querySelector('.non-standard__btn');
    const submitFormBtn = document.querySelector('.filter__submit-box__btn');
    const cardButtons = document.querySelectorAll('.cart__btn');
    const contactUsBtnS = document.querySelectorAll('.contact-us__btn');
    const stockCartBtns = document.querySelectorAll('.stock-cart__text-content-desc-bid-btn');

    const openBtnFormOrder = document.getElementById('r2');
    const modalFormOrder = modal.querySelector('.modals-form-order');

    const workZakazBtns = document.querySelectorAll('.work__body-cart-btn_hover-block');

    const openModalNonStandart = document.querySelector('.non-standard__btn');


    let scrollBarClient = document.documentElement.clientWidth;
    let scrollBarAll = window.innerWidth;

    if (workZakazBtns) {
        workZakazBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('modals_opened');
                modalFormRepresentation.classList.remove('none');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = ''; // Для html
                document.body.style.paddingRight = `0px`;
            })
        })
    }


    if (openModalFormPepresentationBtn) {
        openModalFormPepresentationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modals_opened');
            modalFormApplication.classList.remove('none');
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        })
    }

    if (modalFormOtzivi) {
        openModalFormOtziviBtns.forEach((btnotzivi) => {
            btnotzivi.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('modals_opened');
                modalFormOtzivi.classList.remove('none');
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            });
        })
    }

    if (nonStandaetbtn && modalFormOrder) {
        nonStandaetbtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modals_opened');
            modalFormOrder.classList.remove('none');
            addDataToForm();
            document.body.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden'; // Для html
        })
    }

    if (submitFormBtn && modalFormOrder) {
        submitFormBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modals_opened');
            modalFormOrder.classList.remove('none');
            addDataToForm();
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        })
    }


    if (modalFormOrder) {
        $(document).click(function (e) {
            if ($(e.target).is('.modals__wrapper')) {
                modal.classList.remove('modals_opened');
                modalFormRepresentation.classList.add('none');
                modalFormOrder.classList.add('none');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = ''; // Для html
                document.body.style.paddingRight = `0px`;
                clearDiv();
            }
        });
    }

    if (modalFormRepresentation) {
        $(document).click(function (e) {
            if ($(e.target).is('.modals__wrapper')) {
                modal.classList.remove('modals_opened');
                modalFormRepresentation.classList.add('none');
                modalsConnection.classList.add('none');
                modalFormOtzivi.classList.add('none');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = ''; // Для html
                document.body.style.paddingRight = `0px`;
                clearDiv();

                // изменения от 26_03_25
                // удаление input при закрытии формы
                let inputProductHidden = modalFormRepresentation.querySelector('input[type=hidden]');
                if (inputProductHidden) {
                    inputProductHidden.remove();
                }
                // изменения от 26_03_25
            }
        });
    }


    // получение выбранных фильтров
    const filterShowContentList = document.querySelector('.filter__show-content-list');
    const filterResetBtn = document.querySelector('.reset__btn');
    if (filterShowContentList) {


        const outputContainer = document.querySelector('.modals-form-order__list');
        let filterShowContentListLenght = filterShowContentList.children;

        function addDataToForm() {
            if (filterShowContentListLenght.length > 0) {
                // 4. Создаем фрагмент для оптимизации
                const fragment = document.createDocumentFragment();

                // 5. Перебираем элементы коллекции
                Array.from(filterShowContentListLenght).forEach((item, index) => {
                    // 6. Создаем элемент для вывода
                    const div = document.createElement('div');

                    // div.textContent = `${index + 1}. ${item.textContent}`;
                    div.textContent = `${item.textContent}`;

                    // 7. Добавляем стили
                    div.classList.add('modals-form-order__item')

                    // 8. Добавляем в фрагмент
                    fragment.appendChild(div);
                });

                // 9. Вставляем все элементы за одну операцию
                outputContainer.appendChild(fragment);

            } else {
                outputContainer.innerHTML = '<div>Элементы не найдены</div>';
            }
        }
    }

    function clearDiv() {
        let items = document.querySelectorAll('.modals-form-order__item');
        Array.from(items).forEach(item => {
            item.remove();
        })
    }

    if (filterResetBtn && modalReset) {
        filterResetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modals_opened');
            modalReset.classList.remove('none');
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        });

        if (modalResetBtn) {
            modalResetBtn.addEventListener('click', (e) => {
                modal.classList.remove('modals_opened');
                modalReset.classList.add('none');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = ''; // Для html
                document.body.style.paddingRight = `0px`;
            });
        }

        if (closeModalResetBtn) {
            closeModalResetBtn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.remove('modals_opened');
                modalReset.classList.add('none');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = ''; // Для html
                document.body.style.paddingRight = `0px`;
            });
        }
    }

    const filterBlock = document.querySelector('.filter-container');

    if (openBtnFormOrder && modalFormOrder) {
        openBtnFormOrder.addEventListener('click', (e) => {
            filterBlock.classList.remove('filter-container-active');
            // Исправленная часть
            let cardsList = document.querySelectorAll('.categories__body-list.catalog-categories__body-list');
            cardsList.forEach(card => {
                let li = document.createElement('li');
                li.textContent = "Добавленный элемент";
                card.prepend(li); // Добавляем к текущему элементу card
            });
        });

        closeBtnOther = document.querySelector('.modals-form-order-close').addEventListener('click', () => {
            modal.classList.remove('modals_opened');
            modalFormOrder.classList.add('none');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = ''; // Для html
            document.body.style.paddingRight = `0px`;
            clearDiv();
        })
    }

    if (modalFormOrder) {
        modalFormOrder.addEventListener('click', (e) => {
            // e.preventDefault();

        })
    }

    // открытие модалок на кнопках всех карточках продукта
    cardButtons.forEach((cardBtn) => {
        cardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // изменения от 26_03_25
            const nameProduct = document.createElement('input');
            nameProduct.setAttribute('type', 'hidden');
            nameProduct.setAttribute('name', 'product_id');
            modalFormRepresentation.querySelector('form').append(nameProduct);
            nameProduct.value = cardBtn.dataset.product;
            // изменения от 26_03_25

            modal.classList.add('modals_opened');
            modalFormRepresentation.classList.remove('none');
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        });
    })

    if (stockCartBtns) {
        stockCartBtns.forEach((cardBtn) => {
            cardBtn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('modals_opened');
                modalFormApplication.classList.remove('none');
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            });
        })
    }

    // открытие формы связаться с нами
    if (contactUsBtnS) {
        contactUsBtnS.forEach((contactUsBtn) => {
            contactUsBtn.addEventListener('click', (e) => {
                e.preventDefault();

                modal.classList.add('modals_opened');
                modalsConnection.classList.remove('none');
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            });
        })
    }

    if (closeBtns) {
        closeBtns.forEach((closeBtn) => {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('modals_opened');
                modalFormRepresentation.classList.add('none');
                modalFormApplication.classList.add('none');
                modalsConnection.classList.add('none');
                modalFormOtzivi.classList.add('none');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = ''; // Для html
                document.body.style.paddingRight = `0px`;

                // изменения от 26_03_25
                // удаление input при закрытии формы
                let inputProductHidden = modalFormRepresentation.querySelector('input[type=hidden]');
                if (inputProductHidden) {
                    inputProductHidden.remove();
                }
                // изменения от 26_03_25
            })
        })
    }

    if (openModalNonStandart && modalFormOrder) {
        openModalNonStandart.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modals_opened');
            modalFormOrder.classList.remove('none');
            addDataToForm();
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        });

        closeBtnOther = document.querySelector('.modals-form-order-close').addEventListener('click', () => {
            modal.classList.remove('modals_opened');
            modalFormOrder.classList.add('none');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = ''; // Для html
            document.body.style.paddingRight = `0px`;
            clearDiv();
        })
    }

    // изменения от 26_03_25
    // закрытие и удаление input по кнопке формы Отправить
    const modalFormRepresentationBtnSubmit = modalFormRepresentation.querySelector('.form-representation__form-btn');

    if (modalFormRepresentationBtnSubmit) {
        modalFormRepresentationBtnSubmit.addEventListener('click', (e) => {
            // e.preventDefault();
            let inputProductHidden = modalFormRepresentation.querySelector('input[type=hidden]');

            if (inputProductHidden) {
                inputProductHidden.remove();
            }
        })
    }

    // изменения от 26_03_25

});




