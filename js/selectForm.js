const selectWrapperTwo = document.querySelector('.column2__wrap');
const optionsTwo = selectWrapperTwo.querySelectorAll('option');
const selectInputTwo = selectWrapperTwo.querySelector('.select');

const selectWrapperOne = document.querySelector('.column1__wrap');
const optionsOne = selectWrapperOne.querySelectorAll('option');
const selectInputOne = selectWrapperOne.querySelector('.select');

optionsOne.forEach(option => {
    console.log(option.value);
    option.style.background = 'gray';
    option.style.color = '#FFFFFF';
})
selectInputOne.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value != 'oneSelect') {
        selectInputOne.style.color = '#FFFFFF';
    } else {
        selectInputOne.style.color = '#828282';
    }
})

optionsTwo.forEach(option => {
    console.log(option.value);
    option.style.background = 'gray';
    option.style.color = '#FFFFFF';
})
selectInputTwo.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value != 'twoSelect') {
        selectInputTwo.style.color = '#FFFFFF';
    } else {
        selectInputTwo.style.color = '#828282';
    }
})
