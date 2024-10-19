document.addEventListener('DOMContentLoaded', function () {

  const modal = document.querySelector('.modals');
  // console.log(modal);
  const downloadBtn = document.querySelector('.col3row4 .header-menu-madal__body-top-link');
  // console.log(downloadBtn);
  const modalCatalog = modal.querySelector('.modals-catalog');
  // console.log(modalCatalog);
  const closeDownloadBtn = modal.querySelector('.modals-catalog__btn-download');
  // console.log(closeDownloadBtn);
  const modalForm = modal.querySelector('.modals-connection');
  // console.log(modalForm);




  downloadBtn.addEventListener('click', () => {
    modal.classList.add('modals_opened');
    modalCatalog.classList.remove('none');
  })

  closeDownloadBtn.addEventListener('click', () => {
    modal.classList.remove('modals_opened');
    modalCatalog.classList.add('none');
  })

  const openFormBtn = document.querySelectorAll('.cart__btn');
  // console.log(openFormBtn);
  openFormBtn.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('modals_opened');
      modalForm.classList.remove('none');
    })
  })
});




