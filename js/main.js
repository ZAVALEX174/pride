// 1. Определить кнопку "Показать всё"
const showMore = document.querySelector('.btn__showmore');
// console.log(showMore);
//2. Максимальное количество элементов на странице
const productsLength = document.querySelectorAll(".categories__body-item").length;
// console.log(productsLength);
// 3. Текущее видимое количество элементов на странице
let items = 12;
// console.log(items);

showMore.addEventListener('click', () => {
    items += productsLength;
    // console.log(items);
    // находим массив дочерних элементов списка
    const array = Array.from(document.querySelector('.project-page__body-list').children);
    // console.log(array)
    const visibleItems = array.slice(0, items);

    visibleItems.forEach(el => el.classList.add('is-visible'));

    if (visibleItems.length === productsLength) {
        showMore.style.display = 'none';
    }
});

// добавляем класс кнопке и удаляем у других этот класс если он есть
const productsBtnsBox = document.querySelector('.products__body-btn-box');
if (productsBtnsBox) {
    const buttons = productsBtnsBox.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}






