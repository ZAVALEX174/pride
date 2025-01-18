// document.querySelectorAll('.dropdown').forEach(function (DropDownWrapper) {
//
//     const dropDownList = DropDownWrapper.querySelector('.dropdown__list');
//     const dropdownBtn = DropDownWrapper.querySelector('.header__lang-box');
//     let dropdownItems = dropDownList.querySelectorAll('.dropdown__item');
//     let valueBtn = dropdownBtn.querySelector('.header__lang-box-text');
//     let valueBtnImg = dropdownBtn.querySelector('.header__lang-box-img');
//
//     dropdownBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         dropDownList.classList.toggle('dropdown__list_visible');
//     });
//     dropdownItems.forEach(function (listItem) {
//         listItem.addEventListener('click', function (e) {
//             listItem.dataset.value == 'rus' ? valueBtn.innerText = 'Русский' : valueBtn.innerText = this.innerText;
//             let image = listItem.querySelector('.drop-img').src;
//
//             let inputChecked = listItem.querySelector('input[type="checkbox"]');
//             if (inputChecked.checked == true) {
//                 inputChecked.checked = false;
//
//             } else {
//                 inputChecked.checked = true;
//                 listItem.querySelector('.custom-checkbox').classList.remove('custom-checkbox__selected');
//             }
//         })
//     })
//     dropdownItems.forEach(el => el.addEventListener('click', (e) => {
//         e.preventDefault();
//         dropDownList.classList.remove('dropdown__list_visible');
//     }));
//     document.addEventListener('click', (e) => {
//         if (e.target !== dropdownBtn) {
//             dropDownList.classList.remove('dropdown__list_visible');
//         }
//     })
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Tab' || e.key === 'Escape') {
//             dropDownList.classList.remove('dropdown__list_visible');
//         }
//     })
//
// })
//
//


///////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const customSelect = document.querySelector('.custom-select');
    const selectedOption = customSelect.querySelector('.selected-option');
    const options = customSelect.querySelectorAll('.options li');
    const arrowOrange = document.querySelector('.arrow');
    const closeSelectBtn = document.querySelector('.closes-select');


    // Открытие/закрытие списка
    selectedOption.addEventListener('click', () => {
        arrowOrange.classList.toggle('arrow-selected');
        console.log(arrowOrange);
        const optionsList = customSelect.querySelector('.options');
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
    });

    // Выбор варианта
    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            const text = option.textContent;

            if(value == 'Russian') {
                selectedOption.querySelector('span').textContent = 'Русский';
            } else {
                // Обновляем выбранный вариант
                selectedOption.querySelector('span').textContent = text;
            }

            // Закрываем список
            customSelect.querySelector('.options').style.display = 'none';
            arrowOrange.classList.remove('arrow-selected');


            // Можно добавить логику для обработки выбранного значения
            //console.log(`Выбран вариант: ${text}, значение: ${value}`);
        });
    });

    // Закрытие по кнопке
    closeSelectBtn.addEventListener('click', () => {
        customSelect.querySelector('.options').style.display = 'none';
        arrowOrange.classList.remove('arrow-selected');
    })

    // Закрытие списка при клике вне элемента
    document.addEventListener('click', (event) => {
        if (!customSelect.contains(event.target)) {
            customSelect.querySelector('.options').style.display = 'none';
            arrowOrange.classList.remove('arrow-selected');
        }
    });
});