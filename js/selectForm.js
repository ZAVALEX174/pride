// // Функция для настройки стилей options
// const setOptionsStyles = (options) => {
//     options.forEach(option => {
//         option.style.background = 'gray';
//         option.style.color = '#FFFFFF';
//     });
// };
//
// // Функция для обработки изменения выбора в select
// const handleSelectChange = (selectElement, defaultOptionValue) => {
//     selectElement.addEventListener('change', (e) => {
//         const selectedValue = e.target.value;
//         selectElement.style.color = selectedValue !== defaultOptionValue ? '#FFFFFF' : '#828282';
//     });
// };
//
// // Получаем элементы DOM
// const selectWrapperOne = document.querySelector('.column1__wrap');
// const selectWrapperTwo = document.querySelector('.column2__wrap');
//
// const selectInputOne = selectWrapperOne?.querySelector('.select');
// const selectInputTwo = selectWrapperTwo?.querySelector('.select');
//
// const optionsOne = selectWrapperOne?.querySelectorAll('option');
// const optionsTwo = selectWrapperTwo?.querySelectorAll('option');
//
// // Применяем стили к options
// if (optionsOne) setOptionsStyles(optionsOne);
// if (optionsTwo) setOptionsStyles(optionsTwo);
//
// // Назначаем обработчики событий для select
// if (selectInputOne) handleSelectChange(selectInputOne, 'oneSelect');
// if (selectInputTwo) handleSelectChange(selectInputTwo, 'twoSelect');