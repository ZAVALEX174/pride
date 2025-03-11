document.addEventListener('DOMContentLoaded', function () {

    const modal = document.querySelector('.modals');
    const downloadBtn = document.querySelector('.header-menu-modal__body-top-link_down');
    const modalCatalog = modal.querySelector('.modals-catalog');
    const closeDownloadBtn = modal.querySelector('.modals-catalog__btn-download');
    const modalForm = modal.querySelector('.modals-connection');

    const modalFormZakaz = modal.querySelector('.modals-zakaz');
    const closesModalFormZakaz = modalFormZakaz.querySelector('.modals-zakaz__btn');

    const modalFormRepresentation = modal.querySelector('.modals-form-representation');
    const closesFormRepresentation = modalFormZakaz.querySelector('.modals-zakaz__btn');
    const openModalFormPepresentationBtn = document.querySelector('.swiper-filter-on__header-link');


    const comPredl = document.querySelector('.other__header-btn');

    closeDownloadBtn.addEventListener('click', () => {
        modal.classList.remove('modals_opened');
        modalCatalog.classList.add('none');
        document.body.style.overflow = ' ';
    })

    const openFormBtn = document.querySelectorAll('.benefits__desc-btn');
    openFormBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            document.body.style.overflow = 'hidden';
            e.preventDefault();
            modal.classList.add('modals_opened');
            modalFormZakaz.classList.remove('none');
        })
    })

    closesModalFormZakaz.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.overflow = ' ';
        modal.classList.remove('modals_opened');
        modalFormZakaz.classList.add('none');
    })
});




