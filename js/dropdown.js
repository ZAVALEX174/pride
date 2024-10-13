const dropDownList = document.querySelector('.dropdown__list');
const dropdownBtn = document.querySelector('.header__lang-box');
let dropdownItems = document.querySelectorAll('.dropdown__item');
let labels = document.querySelectorAll('.dropdown__label');
let valueBtn = document.querySelector('.header__lang-box-text');
let valueBtnImg = document.querySelector('.th-img');
// console.log(labels, valueBtn, valueBtnImg);

dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropDownList.classList.toggle('dropdown__list_visible');
});

document.querySelectorAll('.dropdown__item').forEach(function (listItem) {
    listItem.addEventListener('click', function () {
        valueBtn.innerText = this.innerText;
        let immg = listItem.querySelector('.drop-img').src;
        console.log('img:', immg)
        valueBtnImg.src = immg;
    })
})

dropdownItems.forEach(el => el.addEventListener('click', (e) => {
    e.preventDefault();
    dropDownList.classList.remove('dropdown__list_visible');

}));