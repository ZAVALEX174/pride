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
    let scrollBarClient = document.documentElement.clientWidth;
    let scrollBarAll = window.innerWidth;


    const comPredl = document.querySelector('.other__header-btn');

    closeDownloadBtn.addEventListener('click', () => {
        modal.classList.remove('modals_opened');
        modalCatalog.classList.add('none');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = ''; // Для html
        document.documentElement.style.paddingRight = `0px`;
    })

    const openFormBtn = document.querySelectorAll('.benefits__desc-btn');
    openFormBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.documentElement.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            e.preventDefault();
            modal.classList.add('modals_opened');
            modalFormZakaz.classList.remove('none');
        })
    })

    closesModalFormZakaz.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.overflow = '';
        document.documentElement.style.overflow = ''; // Для html
        document.documentElement.style.paddingRight = `0px`;
        modal.classList.remove('modals_opened');
        modalFormZakaz.classList.add('none');
    })


    $(document).click(function (e) {
        if ($(e.target).is('.modals__wrapper')) {
            modal.classList.remove('modals_opened');
            modalFormZakaz.classList.add('none');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = ''; // Для html
            document.documentElement.style.paddingRight = `0px`;

        }
    });

});




