document.addEventListener('DOMContentLoaded', () => {
    const itemsPerPage = 4; // Количество элементов на странице
    const resultList = document.getElementById('result-list');
    const paginationContainer = document.getElementById('pagination');
    const items = Array.from(resultList.getElementsByClassName('result-item'));
    // console.log(items)
    const totalPages = Math.ceil(items.length / itemsPerPage); // Общее количество страниц
    let currentPage = 1;

    // Функция для отображения элементов на текущей странице
    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        items.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'flex'; // Показываем элементы текущей страницы
            } else {
                item.style.display = 'none'; // Скрываем остальные элементы
            }
        });

        // Обновляем информацию о текущей странице
        updatePaginationButtons(page);
    }

    // Функция для создания кнопок пагинации
    function createPaginationButtons() {
        paginationContainer.innerHTML = ''; // Очищаем контейнер

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
            });
            li.appendChild(button);
            paginationContainer.appendChild(li);
        }

        // Обновляем активную кнопку
        updatePaginationButtons(currentPage);
    }

    // Функция для обновления активной кнопки пагинации
    function updatePaginationButtons(activePage) {
        const buttons = paginationContainer.getElementsByTagName('button');
        Array.from(buttons).forEach((button, index) => {
            if (index + 1 === activePage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Инициализация первой страницы
    showPage(currentPage);
    createPaginationButtons();
});
