document.addEventListener('DOMContentLoaded', function () {

  const modal = document.querySelector('.modals');

  const modalFormRepresentation = modal.querySelector('.modals-form-representation');
  // const closesFormRepresentation = modalFormZakaz.querySelector('.modals-zakaz__btn');
  const openModalFormPepresentationBtn = document.querySelector('.banner__btn');
  // console.log(modalFormRepresentation, openModalFormPepresentationBtn);

  openModalFormPepresentationBtn.addEventListener('click', () => {
    modal.classList.add('modals_opened');
    modalFormRepresentation.classList.remove('none');
  })

  closeBtn = document.querySelector('.anketa-close').addEventListener('click', () => {
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




