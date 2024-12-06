document.addEventListener('DOMContentLoaded', function () {

  const modal = document.querySelector('.modals');

  const modalFormRepresentation = modal.querySelector('.modals-form-representation');
  // const closesFormRepresentation = modalFormZakaz.querySelector('.modals-zakaz__btn');
  const openModalFormPepresentationBtn = document.querySelector('.swiper-filter-on__header-link');
  console.log(modalFormRepresentation, openModalFormPepresentationBtn);

  openModalFormPepresentationBtn.addEventListener('click', () => {
    modal.classList.add('modals_opened');
    modalFormRepresentation.classList.remove('none');
  })
});




