document.addEventListener('DOMContentLoaded', function () {

  // для удаления и появления hover эффекта

  const catalogMenuCards = document.querySelectorAll('.catalog-menu-categories__body-item');
  // console.log(catalogMenuCards);

  catalogMenuCards.forEach((el) => el.addEventListener('mouseover', () => {
    const catalogMenuCards2 = document.querySelectorAll('.catalog-menu-categories__body-item');
    catalogMenuCards2.forEach((elem) => {
      elem.classList.remove('catalog-menu-categories__body-item-hover');
    })
    el.classList.add('catalog-menu-categories__body-item');
  }))



  function adjustElementForMobile() {
    const element = document.getElementById("myElement-banner"); // Элемент, который нужно переместить
    const newParent = document.getElementById("banner__mobile-box"); // Новый родительский элемент
    const mediaQuery = window.matchMedia("(max-width: 636px)"); // Проверка разрешения

    if (mediaQuery.matches) {
      // Если разрешение меньше 637px, перемещаем элемент
      newParent.appendChild(element);
    } else {
      // Если разрешение больше или равно 637px, возвращаем элемент на место
      const originalParent = document.getElementById("originalParent");
      originalParent.appendChild(element);
    }
  }

// Вызов функции при загрузке страницы
  adjustElementForMobile();

  window.addEventListener("resize", adjustElementForMobile);

  const itemsContainer = document.getElementById("items-container"); // Контейнер с элементами
  const showMoreButton = document.getElementById("catalog-menu-categories__body-list-showmore-btn"); // Кнопка "Показать ещё"
  const items = itemsContainer.querySelectorAll(".swiper-filter-on__body-item"); // Все элементы
  const itemsPerLoad = 4; // Сколько элементов показывать за раз
  let visibleItems = 0; // Счётчик видимых элементов

  // Функция для показа следующих элементов
  function showMoreItems() {
    // Показываем следующие элементы
    for (let i = visibleItems; i < visibleItems + itemsPerLoad; i++) {
      if (items[i]) {
        items[i].style.display = 'flex'; // Добавляем класс visible
      }
    }
    visibleItems += itemsPerLoad; // Увеличиваем счётчик

    // Скрываем кнопку, если все элементы показаны
    if (visibleItems >= items.length) {
      showMoreButton.style.display = "none";
    }
  }

  // Показываем первые элементы при загрузке страницы
  showMoreItems();

  // Обработчик клика на кнопку "Показать ещё"
  showMoreButton.addEventListener("click", showMoreItems);
});



