document.querySelectorAll('.dropdown').forEach(function (DropDownWrapper) {

    const dropDownList = DropDownWrapper.querySelector('.dropdown__list');
    const dropdownBtn = DropDownWrapper.querySelector('.header__lang-box');
    let dropdownItems = dropDownList.querySelectorAll('.dropdown__item');
    let valueBtn = dropdownBtn.querySelector('.header__lang-box-text');
    let valueBtnImg = dropdownBtn.querySelector('.header__lang-box-img');

    dropdownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropDownList.classList.toggle('dropdown__list_visible');
    });
    dropdownItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            listItem.dataset.value == 'rus' ? valueBtn.innerText = 'Русский' : valueBtn.innerText = this.innerText;
            let image = listItem.querySelector('.drop-img').src;
            valueBtnImg.src = image;
            // listItem.querySelector('.custom-checkbox').classList.toggle('custom-checkbox__selected')
            let inputChecked = listItem.querySelector('input[type="checkbox"]');
            if (inputChecked.checked == true) {
                inputChecked.checked = false;
                // listItem.querySelector('.custom-checkbox').classList.add('custom-checkbox__selected')
            } else {
                inputChecked.checked = true;
                // listItem.querySelector('.custom-checkbox').classList.remove('custom-checkbox__selected')
            }
        })
    })
    dropdownItems.forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        dropDownList.classList.remove('dropdown__list_visible');
    }));
    document.addEventListener('click', (e) => {
        if (e.target !== dropdownBtn) {
            dropDownList.classList.remove('dropdown__list_visible');
        }
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownList.classList.remove('dropdown__list_visible');
        }
    })

})


