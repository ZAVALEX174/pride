document.addEventListener('DOMContentLoaded', function () {
    // выбираем обёртку и инициализируем её как переменную
    const content = document.querySelector('.project-page__body-list');
    // задаём количество карточек для отображения на каждой странице
    let itemsPerPage = null;
    const mediaQuery = window.matchMedia("(max-width: 637px)"); // Проверка разрешения

    if (mediaQuery.matches) {
        // Если разрешение меньше 637px
        itemsPerPage = 4;
    } else {
        // Если разрешение больше или равно 637px, возвращаем элемент на место
        itemsPerPage = 6;
    }
    // создаём переменную, которая отслеживает номер текущей страницы. Она начинается с 0,
    // что означает первую страницу
    let currentPage = 0;
    // для выбора всех элементов с тегом <li>.
    // создаём массив (items) из всех дочерних элементов
    const items = Array.from(content.getElementsByTagName('li'));

    // находим кнопку "Показать больше"
    let showMoreBtn = document.querySelector('.btn__showmore');

    // находим кнопки вперед, назад
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');


    let curInd = itemsPerPage;

    // Отработка функциональности showPage()

    // Начнём с создания функции showPage(), принимающей параметр page.
    // Эта функция отвечает за отображение элементов, связанных с данной страницей, при её вызове.
    function showPage(page) {

        // Далее мы вычисляем startIndex, являющийся первым элементом,
        // который должен быть отображён на текущей странице, путём умножения параметра page на itemsPerPage.
        const startIndex = page * itemsPerPage;

        // Также вычисляется endIndex, находящийся сразу после последнего элемента,
        // который должен быть отображён на текущей странице.
        const endIndex = startIndex + itemsPerPage;

        // С помощью функции items.forEach() мы создаём цикл, перебирающий каждую карточку и проверяющий,
        // попадает ли её индекс в диапазон элементов, которые будут отображаться на текущей странице,
        // т.е. находится ли он до startIndex или после/равно endIndex. Если индекс находится в этом диапазоне,
        // то ключевое слово toggle применяет к элементу класс li-hidden (который мы определим в нашем CSS-коде),
        // эффективно скрывая его. Если индекс не удовлетворяет ни одному из условий, класс li-hidden удаляется,
        // делая элемент видимым.
        items.forEach((item, index) => {
            item.classList.toggle('li-hidden', index < startIndex || index >= endIndex);

            // Проверяем, если индекс текущей карточки меньше последнего индекса карточки
            // которая должна последней отображаться на странице, то кнопка Назад - скрывается,
            // а если больше, значит отображается не первая страница и кнопка Назад - отображается
            if (itemsPerPage >= endIndex) {
                prevBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'block';
            }

            // Проверяем, если индекс последней карточки больше последнего индекса карточки
            // которая должна последней отображаться на странице, то кнопка Вперед - скрывается,
            // а если меньше, значит отображается не последняя страница и кнопка Вперед - отображается,
            // так же с кнопкой 'Показать больше'
            if (endIndex >= items.length) {
                nextBtn.style.display = 'none';
                showMoreBtn.style.display = 'none';
            } else {
                nextBtn.style.display = 'block';
                showMoreBtn.style.display = 'flex';
            }
        });
        updateActiveButtonStates();
    }

    // Добавление кнопок
    function createPageButtons() {
        //вычисляем общее количество страниц, необходимых для отображения нашей таблицы.
        const totalPages = Math.ceil(items.length / itemsPerPage);
        const paginationContainer = document.querySelector('.ul-btn');
        paginationContainer.classList.add('pagination');

        // Следующим шагом будет создание кнопок для каждой страницы с
        // использованием цикла для перебора всех возможных индексов страниц:
        for (let i = 0; i < totalPages; i++) {
            // В каждой итерации страницы с помощью метода document.createElement()
            // создаётся новая отдельная кнопка страницы, увеличивающая номер страницы на 1 при каждом цикле.
            const pageButton = document.createElement('li');
            pageButton.classList.add('li-pag-btn')
            pageButton.textContent = i + 1;

            // Далее мы создаём слушатель события click и прикрепляем его к кнопкам страницы.
            // При нажатии на кнопку будет выполняться функция обратного вызова слушателя события.
            // Вот объяснение функции обратного вызова:
            // Переменная currentPage обновляется до текущего значения i,
            // которое соответствует индексу кликнутой страницы.
            // Функция showPage() вызывается с обновлённым значением currentPage,
            // что приводит к отображению содержимого кликнутой страницы.
            pageButton.addEventListener('click', () => {
                currentPage = i;
                window.scrollTo(0, 100);
                showPage(currentPage);
                updateActiveButtonStates();
            });

            // Завершая наш код создания кнопки, мы заканчиваем его следующим образом:
            paginationContainer.appendChild(pageButton);
        }
    }

    let pageCounter;


    const showMore = (e) => {
        const currentActiveLi = document.querySelector('.pagination li.active');
        let newActive;

        if (pageCounter >= itemsPerPage) {
            // console.log("пиши тут");
            if (e.target.closest('.btn__showmore')) {
                pageCounter = pageCounter;
                let pageCounter2 = pageCounter + itemsPerPage;

                function showPage(page) {
                    const startIndex = pageCounter;
                    const endIndex = startIndex + pageCounter2;
                    items.forEach((item, index) => {

                        newActive = currentActiveLi.nextElementSibling;

                        if (pageCounter2 >= endIndex) {
                            prevBtn.style.display = 'none';
                        } else {
                            prevBtn.style.display = 'block';
                        }

                        if (endIndex >= items.length) {
                            nextBtn.style.display = 'none';
                            showMoreBtn.style.display = 'none';
                            prevBtn.style.display = 'none';
                            currentActiveLi.classList.remove('active');
                            newActive.classList.add('active');

                            const pageButtons = Array.from(document.querySelectorAll('.pagination li'));
                            pageButtons.forEach((button, index) => {

                                if (itemsPerPage != pageCounter) {
                                    pageButtons[0].classList.remove('active');
                                }
                            });

                        } else {
                            nextBtn.style.display = 'block';
                            showMoreBtn.style.display = 'flex';
                            prevBtn.style.display = 'block';
                            currentActiveLi.classList.remove('active');
                            newActive.classList.add('active');
                        }
                        item.classList.toggle('li-hidden', index < startIndex || index >= endIndex);

                    });
                }

                updateActiveButtonStates();
                showPage(currentPage);
            }
        }
        else {
            if (e.target.closest('.btn__showmore')) {
                curInd = curInd + itemsPerPage;

                function showPage(page) {
                    const startIndex = page * curInd;
                    const endIndex = startIndex + curInd;
                    console.log(startIndex, 'startIndex');
                    console.log(endIndex, 'endIndex');

                    items.forEach((item, index) => {

                        newActive = currentActiveLi.nextElementSibling;

                        if (curInd >= endIndex) {
                            prevBtn.style.display = 'none';
                        } else {
                            prevBtn.style.display = 'block';
                        }

                        if (endIndex >= items.length) {
                            nextBtn.style.display = 'none';
                            showMoreBtn.style.display = 'none';
                            prevBtn.style.display = 'none';
                            currentActiveLi.classList.remove('active');
                            newActive.classList.add('active');

                            const pageButtons = Array.from(document.querySelectorAll('.pagination li'));
                            pageButtons.forEach((button, index) => {

                                if (itemsPerPage != curInd) {
                                    pageButtons[0].classList.remove('active');
                                }
                            });

                        } else {
                            nextBtn.style.display = 'block';
                            showMoreBtn.style.display = 'flex';
                            prevBtn.style.display = 'block';
                            currentActiveLi.classList.remove('active');
                            newActive.classList.add('active');
                        }
                        item.classList.toggle('li-hidden', index < startIndex || index >= endIndex);

                    });
                }

                updateActiveButtonStates();
                showPage(currentPage);
            }
        }
    }

    // функция для переключения по кнопкам
    const hendlerBtn = (e) => {
        const currentActiveLi = document.querySelector('.pagination li.active');
        let newActive;

        if (e.target.closest('.next-btn')) {
            newActive = currentActiveLi.nextElementSibling;
            currentPage++;
            window.scrollTo(0, 100);
            showPage(currentPage);

        } else {
            newActive = currentActiveLi.previousElementSibling;
            currentPage--;
            window.scrollTo(0, 800);
            showPage(currentPage);
        }

        if (e.target.closest('.prev-btn')) {
            window.scrollTo(0, 100);
        }

        currentActiveLi.classList.remove('active');
        newActive.classList.add('active');
    }

    nextBtn.addEventListener('click', hendlerBtn);
    prevBtn.addEventListener('click', hendlerBtn);

    // Подсветка активных кнопок
    function updateActiveButtonStates() {
        // Сначала мы извлекаем все кнопки пагинации с помощью document.querySelectorAll
        // и присваиваем их переменной pageButtons.
        const pageButtons = document.querySelectorAll('.pagination li');
        pageButtons.forEach((button, index) => {
            // Далее мы используем условный оператор if для назначения стилей класса active,
            // если индекс кнопки совпадает с текущей страницей.
            if (index === currentPage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }


    // Вызов скрипта
    // Мы вызываем функцию createPageButtons() перед функцией showPage().
    // Это гарантирует, что кнопки будут созданы сразу после загрузки страницы.
    createPageButtons(); // Call this function to create the page buttons initially
    showPage(currentPage);
    showMoreBtn.addEventListener('click', showMore);

    const pageButtons = Array.from(document.querySelectorAll('.ul-btn li'));
    console.log(pageButtons);
    pageButtons.forEach((button, index) => {

        button.addEventListener('click', (e) => {
            {
                e.preventDefault();
                console.log('Меня нажали');

                if (index >= 1) {
                    console.log('Привет');

                    pageCounter = itemsPerPage * index;
                    console.log(pageCounter);
                }
            }
        })
    });
})