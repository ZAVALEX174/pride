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
      modalFormOrder.classList.add('none');
      clearDiv();
    }
  });

  const openBtnFormOrder = document.getElementById('r2');
  const modalFormOrder = modal.querySelector('.modals-form-order');
  console.log(openBtnFormOrder, modalFormOrder);



  // получение выбранных фильтров
  const filterShowContentList = document.querySelector('.filter__show-content-list');
  const showMoreFilterBtnResault = document.querySelector('.filter-show-more__btn_res');
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

  showMoreFilterBtnResault.addEventListener('click', (e) => {
    e.preventDefault();

  })

  if (openBtnFormOrder && modalFormOrder) {
    openBtnFormOrder.addEventListener('click', (e) => {
      modal.classList.add('modals_opened');
      modalFormOrder.classList.remove('none');
      addDataToForm();
    });

    closeBtn = document.querySelector('.modals-form-order-close').addEventListener('click', () => {
      modal.classList.remove('modals_opened');
      modalFormOrder.classList.add('none');
      clearDiv();
    })
  }

});




