// аккардион
const widgets = document.querySelectorAll('.widget.widget-height');

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
});

widgets.forEach(widget => {
    let title = widget.querySelector('.widget__title');

    title.addEventListener('click', (e) => {
        e.preventDefault();

        //находим элемент, в котором храниться содержимое виджета
        let widgetHeight = widget.querySelector('.widget__body');

        // проверяем, если виджет раскрыт, то по клику закрываем его и удаляем класс для псевдоэлемента
        if (widgetHeight.style.maxHeight) {
            title.classList.remove('widget__title_down');
            widgetHeight.style.maxHeight = null;
        } else {
            // раскрываем виджет и добавляем класс для псевдоэлемента
            title.classList.add('widget__title_down');
            widgetHeight.style.maxHeight = widgetHeight.scrollHeight + "px";
        }
    })
});