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
  const closeModalFormPepresentationBtn = document.querySelector('.anketa-close');
  console.log(closeModalFormPepresentationBtn);

  // console.log(modalFormRepresentation, openModalFormPepresentationBtn);


  // console.log(modalForm);

  const comPredl = document.querySelector('.kom-pred__btn');
  // console.log(comPredl);

  const overlayClose = document.querySelector('.modals__wrapper');


  // downloadBtn.addEventListener('click', () => {
  //     modal.classList.add('modals_opened');
  //     modalCatalog.classList.remove('none');
  // })

  // closeDownloadBtn.addEventListener('click', () => {
  //     modal.classList.remove('modals_opened');
  //     modalCatalog.classList.add('none');
  // })

  // const openFormBtn = document.querySelectorAll('.benefits__desc-btn');
  // openFormBtn.forEach(el => {
  //     el.addEventListener('click', (e) => {
  //         e.preventDefault();
  //         modal.classList.add('modals_opened');
  //         modalFormZakaz.classList.remove('none');
  //     })
  // })

  // closesModalFormZakaz.addEventListener('click', (e) => {
  //     e.preventDefault();

  //     modal.classList.remove('modals_opened');
  //     modalFormZakaz.classList.add('none');
  // })

  // пока закомитил
  comPredl.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modals_opened');
    // modalFormZakaz.classList.remove('none');
    modalFormRepresentation.classList.remove('none');

  })


  closeModalFormPepresentationBtn.addEventListener('click', () => {
    modal.classList.remove('modals_opened');
    modalFormRepresentation.classList.add('none');
  })


  $(document).click(function (e) {
    if ($(e.target).is('.modals__wrapper')) {
      modal.classList.remove('modals_opened');
      modalFormRepresentation.classList.add('none');
    }
  });
});
