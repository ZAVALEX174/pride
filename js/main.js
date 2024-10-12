// 1. Определить кнопку "Показать всё"
const showMore = document.querySelector('.categories__body-showmore-btn');
// console.log(showMore);
//2. Максимальное количество элементов на странице
const productsLength = document.querySelectorAll(".categories__body-item").length;
// console.log(productsLength);
// 3. Текущее видимое количество элементов на странице
let items = 6;
// console.log(items);

showMore.addEventListener('click', () => {
    items += productsLength;
    // console.log(items);
    // находим массив дочерних элементов списка
    const array = Array.from(document.querySelector('.categories__body-list').children);
    // console.log(array)
    const visibleItems = array.slice(0, items);

    visibleItems.forEach(el => el.classList.add('is-visible'));

    if (visibleItems.length === productsLength) {
        showMore.style.display = 'none';
    }
});
