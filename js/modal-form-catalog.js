document.addEventListener('DOMContentLoaded', function () {

    const modal = document.querySelector('.modals');
    const modalFormOtzivi = document.getElementById('modal-otzivi');
    const openModalFormOtziviBtns = document.querySelectorAll('.our-projects-cart__btn-open-modal-form');
    const modalFormRepresentation = document.getElementById('modal-payment');
    const modalFormApplication = document.getElementById('modal-application');
    const modalFormApplicationSubmitBtn = modalFormApplication.querySelector('.form-representation__form-btn');

    const modalFormQuestion = document.getElementById('modal-question');
    const modalReset = modal.querySelector('.modal-reset');
    const modalResetBtn = modal.querySelector('.modal-reset__btn');
    const closeModalResetBtn = modal.querySelector('.modal-reset__close');
    const modalsConnection = document.getElementById('modal-contacts');
    const modalContactsFormId = 'modal-contacts';
    const modalsConnectionFormBtn = modalsConnection.querySelector('.form-representation__form-btn');
    const closeBtns = document.querySelectorAll('.anketa-close');
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

    const comPredl = document.querySelector('.kom-pred__btn');


    // изменения 29_03_25
    let scrollBarClient = document.documentElement.clientWidth;
    let scrollBarAll = window.innerWidth;

    const openBtnsModalFormComPred = document.querySelectorAll('.compred__btn');

    if (openBtnsModalFormComPred && modalsConnection) {
        openBtnsModalFormComPred.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                // console.log("должна открыться форма связи с менеждером");
                modal.classList.add('modals_opened');
                document.getElementById('modal-contacts').classList.remove('none');
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            })
        })
    }
    // изменения 29_03_25

    if (workZakazBtns) {
        workZakazBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('modals_opened');
                document.getElementById('modal-payment').classList.remove('none');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = ''; // Для html
                document.body.style.paddingRight = `0px`;
            })
        })
    }

    if (openModalFormPepresentationBtn) {
        openModalFormPepresentationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            //added 23.04.25 --start            
            document.getElementById('modal-application').querySelector('[name="category_id"]').value = e.target.dataset.category;
            //added 23.04.25 --end
            modal.classList.add('modals_opened');
            document.getElementById('modal-application').classList.remove('none');
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        })
    }


    const questionsAnswersBtns = document.querySelectorAll('.questions-answers__btn');
    if (questionsAnswersBtns) {
        questionsAnswersBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('modals_opened');
                document.getElementById('modal-question').classList.remove('none');
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            })
        })
    }

    if (modalFormOtzivi) {
        openModalFormOtziviBtns.forEach((btnotzivi) => {
            btnotzivi.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('modals_opened');
                document.getElementById('modal-otzivi').classList.remove('none');


                // document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            });
        })
    }

    if (comPredl && modalFormRepresentation) {
        comPredl.addEventListener('click', (e) => {
            e.preventDefault();
            //изменения 150425
            document.getElementById('modal-payment').querySelector('[name="product_id"]').value = e.target.dataset.product;
            modal.classList.add('modals_opened');
            document.getElementById('modal-payment').classList.remove('none');
            // document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        });
    }

    if (nonStandaetbtn && modalFormOrder) {
        nonStandaetbtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modals_opened');
            modalFormOrder.classList.remove('none');
            addDataToForm();
            document.body.style.overflow = 'hidden';
            // document.body.style.overflow = 'hidden'; // Для html
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
                document.getElementById('modal-payment').classList.add('none');
                modalFormOrder.classList.add('none');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = ''; // Для html
                document.body.style.paddingRight = `0px`;
                clearDiv();
            }
        });
    }

    if (modalFormRepresentation || modalsConnection || modalFormOtzivi  || modalApplicationSent || modalFormApplication) {
        $(document).click(function (e) {
            if ($(e.target).is('.modals__wrapper')) {
                modal.classList.remove('modals_opened');
                document.getElementById('modal-payment').classList.add('none');
                document.getElementById('modal-contacts').classList.add('none');
                document.getElementById('modal-otzivi').classList.add('none');
             //   modalReviewSent.classList.add('none');
              //  modalCostCalculation.classList.add('none');
                modalApplicationSent.classList.add('none');
              //  modalParametersSent.classList.add('none');
                document.getElementById('modal-application').classList.add('none');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = ''; // Для html
                document.body.style.paddingRight = `0px`;
                clearDiv();

                // изменения от 26_03_25
                // удаление input при закрытии формы
                /*
                let inputProductHidden = modalFormRepresentation.querySelector('input[type=hidden]');
                if (inputProductHidden) {
                    inputProductHidden.remove();
                }*/
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

        // изменения 29_03_25
        // const closeBtnOther = document.querySelector('.modals-form-order-close').addEventListener('click', () => {
        //     modal.classList.remove('modals_opened');
        //     modalFormOrder.classList.add('none');
        //     document.body.style.overflow = '';
        //     document.documentElement.style.overflow = ''; // Для html
        //     document.body.style.paddingRight = `0px`;
        //     clearDiv();
        // });
        // изменения 29_03_25
    }

    /*
    if (modalFormOrder) {
        modalFormOrder.addEventListener('click', (e) => {
            // e.preventDefault();

        })
    }
    */

    

    // открытие модалок на кнопках всех карточках продукта
    cardButtons.forEach((cardBtn) => {
        cardBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // изменения от 26_03_25       
            //изменения от 150425     
            //const nameProduct = document.createElement('input');
            //nameProduct.setAttribute('type', 'hidden');
            //nameProduct.setAttribute('name', 'product_id');
            //document.getElementById('modal-payment').querySelector('form').append(nameProduct);
            document.getElementById('modal-payment').querySelector('[name="product_id"]').value = cardBtn.dataset.product;
            // изменения от 26_03_25

            modal.classList.add('modals_opened');
            document.getElementById('modal-payment').classList.remove('none');
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
                document.getElementById('modal-application').classList.remove('none');
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
                document.getElementById(modalContactsFormId).classList.remove('none');
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
                
            });
        })
    }

    if (closeBtns) {
        closeBtns.forEach((closeBtn) => {
            closeBtn.addEventListener('click', () => {
                closeModals();
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
    }

    // изменения от 26_03_25
    // закрытие и удаление input по кнопке формы Отправить
    //Изменения от 150425
    /*const modalFormRepresentationBtnSubmit = modalFormRepresentation.querySelector('.form-representation__form-btn');

    if (modalFormRepresentationBtnSubmit) {
        modalFormRepresentationBtnSubmit.addEventListener('click', (e) => {
            // e.preventDefault();
            let inputProductHidden = modalFormRepresentation.querySelector('input[type=hidden]');

            if (inputProductHidden) {
                inputProductHidden.remove();
            }
            // modalFormRepresentation.classList.add('none');
        })
    }*/

    // изменения от 26_03_25


    // изменения от 31_03_25
    // открытие/закрытие отбивки для отзывов

    const modalReviewSentCloseBtn = document.getElementById('modal-review-sent-close-btn');

    if (modalReviewSentCloseBtn) {
        modalReviewSentCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('modals_opened');
            document.getElementById('modal-payment').classList.add('none');
            document.getElementById('modal-application').classList.add('none');
            document.getElementById('modal-contacts').classList.add('none');
            document.getElementById('modal-otzivi').classList.add('none');
          //  modalReviewSent.classList.add('none');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = ''; // Для html
            document.body.style.paddingRight = `0px`;
        })
    }

    // ==================================


    // Закрытие отбивки для компредл
   // const modalCostCalculation = document.getElementById('modal-cost-calculation');
    const modalCostCalculationCloseBtn = document.getElementById('modal-cost-calculation-close-btn');


    if (modalCostCalculationCloseBtn) {
        modalCostCalculationCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('modals_opened');
            document.getElementById('modal-payment').classList.add('none');
            document.getElementById('modal-application').classList.add('none');
            document.getElementById('modal-contacts').classList.add('none');
            document.getElementById('modal-otzivi').classList.add('none');
          //  modalReviewSent.classList.add('none');
         //   modalCostCalculation.classList.add('none');
            document.body.style.overflow = '';
            // document.documentElement.style.overflow = ''; // Для html
            document.documentElement.style.overflow = ''; // Для html
            document.body.style.paddingRight = `0px`;

        })
    }

// ==================================

    // открытие/закрытие отбивки для отзывов
    const submitForm = document.querySelector('.form-representation.form-representation-product-cart .form-representation__form-btn');
    const modalApplicationSent = document.getElementById('modal-application-sent');

    // modalFormApplicationSubmitBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     console.log('Запросить выполнен');
    //     modal.classList.add('modals_opened');
    //     modalFormApplication.classList.add('none');
    //     modalApplicationSent.classList.remove('none');
    //     // document.documentElement.style.overflow = "hidden";
    //     document.body.style.overflow = "hidden";
    //     document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
    // })

    // added 160425
    const cbResultForm = document.getElementById('cbResultForm');
    const cbResultFormCloseBtn = document.getElementById('cbResultForm-close-btn');
    if (cbResultForm && cbResultFormCloseBtn) {
        cbResultFormCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('modals_opened');
            cbResultForm.classList.add('none');        
        });
    }



    const modalApplicationSentCloseBtn = document.getElementById('application-sent-close-btn');

    if (modalApplicationSentCloseBtn) {
        modalApplicationSentCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('modals_opened');
            document.getElementById('modal-payment').classList.add('none');
            document.getElementById('modal-application').classList.add('none');
            document.getElementById('modal-contacts').classList.add('none');
            document.getElementById('modal-otzivi').classList.add('none');
          //  modalReviewSent.classList.add('none');
            modalApplicationSent.classList.add('none');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = ''; // Для html
            document.body.style.paddingRight = `0px`;
        })
    }

    // ==================================

    // Закрытие отбивки для фильтра
    // const submitFormModalsOrder = modalFormOrder.querySelector('.form-representation__form-btn');
   // const modalParametersSent = document.getElementById('modal-parameters-sent');
    const modalParametersSentCloseBtn = document.getElementById('parameters-sent-close-btn');


    if (modalParametersSentCloseBtn) {
        modalParametersSentCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('modals_opened');
            document.getElementById('modal-payment').classList.add('none');
            document.getElementById('modal-application').classList.add('none');
            document.getElementById('modal-contacts').classList.add('none');
            document.getElementById('modal-otzivi').classList.add('none');
          //  modalReviewSent.classList.add('none');
         //   modalCostCalculation.classList.add('none');
          //  modalParametersSent.classList.add('none');
            document.body.style.overflow = '';
            // document.documentElement.style.overflow = ''; // Для html
            document.documentElement.style.overflow = ''; // Для html
            document.body.style.paddingRight = `0px`;

        })
    }

    const modalFormZakaz = document.querySelector('.modals-zakaz');
   /*
    const openModalZayavkaFormSubminBtn = modalFormZakaz.querySelector('.btn.modal-form__btn.modal-zakaz__form-btn');
    if (openModalZayavkaFormSubminBtn) {
        openModalZayavkaFormSubminBtn.addEventListener('click', (e) => {
            modalFormZakaz.classList.add('none');
            // modalApplicationSent.classList.remove('none');
            // document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        })
    }
*/

    // изменения от 31_03_25


    const modalsSubmitYourApplication = document.getElementById('modal-submit-your-application');
    const servicesOpenModalBtn = document.getElementById('service-page-advantages-btn');
    if (servicesOpenModalBtn) {

        servicesOpenModalBtn.addEventListener('click', (e) => {
            modal.classList.add('modals_opened');
            document.getElementById('modal-submit-your-application').classList.remove('none');
            // document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        })
    }
    // изменения от 07_04_25

    // изменения от 07_04_25
    const advantageOpenModalBtns = document.querySelectorAll('.cooperation-section__text-btn');
    if (advantageOpenModalBtns) {
        advantageOpenModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                modal.classList.add('modals_opened');
                document.getElementById('modal-contacts').classList.remove('none');
                // document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
                // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            })
        })
    }

    const aboutProgramLinkBtn = document.querySelector('.about-program__link');
    if (aboutProgramLinkBtn) {

        aboutProgramLinkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modals_opened');
            document.getElementById('modal-contacts').classList.remove('none');
            // document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        })
    }
    // изменения от 07_04_25
});

// изменения от 07_04_25
const modal = document.querySelector('.modals');
//const modalReviewSent = document.getElementById('modal-review-sent');
//const modalCostCalculation = document.getElementById('modal-cost-calculation');
const modalApplicationSent = document.getElementById('modal-application-sent');
//const modalParametersSent = document.getElementById('modal-parameters-sent');
let scrollBarClient = document.documentElement.clientWidth;
let scrollBarAll = window.innerWidth;

// для modalFormOtzivi



function openModalReviewSent() {
    modal.classList.add('modals_opened');
  //  modalReviewSent.classList.remove('none');
    // document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
}


// для modalFormRepresentation, modalsConnection, openFooterFormInput, openAbsoluteItemFormInput
const openFooterFormInput = document.querySelector('.footer__callback-form-input');
const openAbsoluteItemFormInput = document.getElementById('absolute-item-title');

function openModalCostCalculation() {
    if (modal && modalCostCalculation) {
        modal.classList.add('modals_opened');
        // modalsConnection.classList.add('none');
      //  modalCostCalculation.classList.remove('none');
        // document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
    }
}

// для modals-zakaz, всех форм на страницах,

function openModalApplicationSent() {
    if (modal && modalApplicationSent) {
        modal.classList.add('modals_opened');
        modalApplicationSent.classList.remove('none');
        // document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
    }
}

// для modalFormOrder,

function openModalParametersSent() {
    if (modal && modalParametersSent) {
        modal.classList.add('modals_opened');
       // modalParametersSent.classList.remove('none');
        // document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
    }
}


function closeModals() {
    const modalFormRepresentation = document.getElementById('modal-payment');
    const modalFormApplication = document.getElementById('modal-application');
    const modalFormOtzivi = document.getElementById('modal-otzivi');
    const modalsConnection = document.getElementById('modal-contacts');    
    const modalAaplication = document.getElementById('modal-submit-your-application'); //added 150425
    const modalQuestions = document.getElementById('modal-question'); //added 150425
    document.body.style.overflow = '';
    document.documentElement.style.overflow = ''; // Для html
    document.body.style.paddingRight = `0px`;
    modal.classList.remove('modals_opened');
    modalFormRepresentation.classList.add('none');
    modalFormApplication.classList.add('none');
    modalsConnection.classList.add('none');
    modalFormOtzivi.classList.add('none');
    modalAaplication.classList.add('none'); //added 150425
    modalQuestions.classList.add('none'); //added 150425


    // изменения от 26_03_25
    // удаление input при закрытии формы
    //изменения от 150425
    /*
    let inputProductHidden = modalFormRepresentation.querySelector('input[type=hidden]');
    if (inputProductHidden) {
        inputProductHidden.remove();
    }
    */
    // изменения от 26_03_25
}