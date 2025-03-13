document.addEventListener('DOMContentLoaded', function () {

  const modal = document.querySelector('.modals');

  const modalFormRepresentation = modal.querySelector('.modals-form-representation');
  const modalReset = modal.querySelector('.modal-reset');
  const modalResetBtn = modal.querySelector('.modal-reset__btn');
  const closeModalResetBtn = modal.querySelector('.modal-reset__close');
  // const closesFormRepresentation = modalFormZakaz.querySelector('.modals-zakaz__btn');
  const openModalFormPepresentationBtn = document.querySelector('.banner__btn');
  // console.log(modalFormRepresentation, openModalFormPepresentationBtn);
  const nonStandaetbtn = document.querySelector('.non-standard__btn');

  openModalFormPepresentationBtn.addEventListener('click', () => {
    modal.classList.add('modals_opened');
    modalFormRepresentation.classList.remove('none');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'; // Для html
  })

  if (nonStandaetbtn) {
    nonStandaetbtn.addEventListener('click', () => {
      modal.classList.add('modals_opened');
      modalFormOrder.classList.remove('none');
      addDataToForm();
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // Для html
    })
  }

  closeBtn = document.querySelector('.anketa-close').addEventListener('click', () => {
    modal.classList.remove('modals_opened');
    modalFormRepresentation.classList.add('none');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = ''; // Для html
  })

  $(document).click(function (e) {
    if ($(e.target).is('.modals__wrapper')) {
      modal.classList.remove('modals_opened');
      modalFormRepresentation.classList.add('none');
      modalFormOrder.classList.add('none');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = ''; // Для html
      clearDiv();
    }
  });

  const openBtnFormOrder = document.getElementById('r2');
  const modalFormOrder = modal.querySelector('.modals-form-order');
  console.log(openBtnFormOrder, modalFormOrder);

  // получение выбранных фильтров
  const filterShowContentList = document.querySelector('.filter__show-content-list');
  const filterResetBtn = document.querySelector('.reset__btn');

  const outputContainer = document.querySelector('.modals-form-order__list');
  // console.log(showMoreFilterBtnResault, 'showMoreFilterBtnResault');
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

  function clearDiv() {
    let items = document.querySelectorAll('.modals-form-order__item');
    Array.from(items).forEach(item => {
      item.remove();
    })
  }

  if (filterResetBtn) {
    filterResetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('modals_opened');
      modalReset.classList.remove('none');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // Для html
    });
    modalResetBtn.addEventListener('click', (e) => {
      modal.classList.remove('modals_opened');
      modalReset.classList.add('none');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = ''; // Для html
    });
    closeModalResetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('modals_opened');
      modalReset.classList.add('none');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = ''; // Для html
    });

  }

  if (openBtnFormOrder && modalFormOrder) {
    openBtnFormOrder.addEventListener('click', (e) => {
      modal.classList.add('modals_opened');
      modalFormOrder.classList.remove('none');
      addDataToForm();
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // Для html
    });

    closeBtn = document.querySelector('.modals-form-order-close').addEventListener('click', () => {
      modal.classList.remove('modals_opened');
      modalFormOrder.classList.add('none');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = ''; // Для html
      clearDiv();
    })
  }

  modalFormOrder.addEventListener('click', (e) => {
    // e.preventDefault();

  })
});




