document.addEventListener('DOMContentLoaded', () => {

  const modal = document.querySelector('.modals');
  const modalFormOtzivi = modal.querySelector('.modals-form-representation-otzivi');

  const openModalOtzivi = document.querySelector('.our-projects-cart__btn-open-modal-form');
  // console.log(openModalOtzivi);
  const closeModalOtziviBtn = document.querySelector('.otzivi-close');

  openModalOtzivi.addEventListener('click', () => {
    modal.classList.add('modals_opened');
    // modalFormZakaz.classList.remove('none');
    modalFormOtzivi.classList.remove('none');
  })

  closeModalOtziviBtn.addEventListener('click', () => {
    modal.classList.remove('modals_opened');
    modalFormOtzivi.classList.add('none');
  })



  $(document).click(function (e) {
    if ($(e.target).is('.modals__wrapper')) {
      modal.classList.remove('modals_opened');
      modalFormOtzivi.classList.add('none');
    }
  });

});