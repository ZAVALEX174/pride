document.addEventListener('DOMContentLoaded', function () {

    const modal = document.querySelector('.modals');
    // console.log(modal);
    const downloadBtn = document.querySelector('.header-menu-modal__body-top-link_down');
    // console.log(downloadBtn);
    const modalCatalog = modal.querySelector('.modals-catalog');
    // console.log(modalCatalog);
    const closeDownloadBtn = modal.querySelector('.modals-catalog__btn-download');
    // console.log(closeDownloadBtn);
    const modalForm = modal.querySelector('.modals-connection');
    // console.log(modalForm);

    const modalFormZakaz = modal.querySelector('.modals-zakaz');
    const closesModalFormZakaz = modalFormZakaz.querySelector('.modals-zakaz__btn');
    // console.log(modalForm);

    const modalFormRepresentation = modal.querySelector('.modals-form-representation');
    const closesFormRepresentation = modalFormZakaz.querySelector('.modals-zakaz__btn');
    const openModalFormPepresentationBtn = document.querySelector('.swiper-filter-on__header-link');
    // console.log(modalFormRepresentation, openModalFormPepresentationBtn);


    // console.log(modalForm);

    const comPredl = document.querySelector('.other__header-btn');
    // console.log(comPredl);


    // downloadBtn.addEventListener('click', () => {
    //     modal.classList.add('modals_opened');
    //     modalCatalog.classList.remove('none');
    // })

    closeDownloadBtn.addEventListener('click', () => {
        modal.classList.remove('modals_opened');
        modalCatalog.classList.add('none');
    })

    // const openFormBtn = document.querySelectorAll('.cart__btn');
    const openFormBtn = document.querySelectorAll('.benefits__desc-btn');
    // console.log(openFormBtn);
    openFormBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modals_opened');
            modalFormZakaz.classList.remove('none');
        })
    })

    closesModalFormZakaz.addEventListener('click', (e) => {
        e.preventDefault();

        modal.classList.remove('modals_opened');
        modalFormZakaz.classList.add('none');
    })

// пока закомитил
    // comPredl.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     modal.classList.add('modals_opened');
    //     modalFormZakaz.classList.remove('none');
    // })


    // openModalFormPepresentationBtn.addEventListener('click', () => {
    //     modal.classList.add('modals_opened');
    //     modalFormRepresentation.classList.remove('none');
    // })
});




