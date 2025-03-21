const modalMap = document.querySelector('.geografhy__modal');
// console.log(modalMap)
const openModalMapBtns = document.querySelectorAll('.geografhy__body-icon-map svg');
// console.log(openModalMapBtns)
const closeModalMap = document.querySelector('.close');

openModalMapBtns.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        modalMap.className = modalMap.className.replace(/\b(msk|sev-am|souts-am|afr)-mod\b/g, '');
        openModalMapBtns.forEach(el => el.classList.remove('icon__black'));

        // e.stopPropagation();
        // console.log(e.target);
        if (item.classList.contains('msk-i')) {
            item.classList.add('icon__black');
            modalMap.classList.add('msk-mod');
            modalMap.style.display = 'flex';
            return;
        }
        if (item.classList.contains('sev-am-i')) {
            item.classList.add('icon__black');
            modalMap.classList.add('sev-am-mod');
            modalMap.style.display = 'flex';
            return;
        }
        if (item.classList.contains('souts-am-i')) {
            item.classList.add('icon__black');
            modalMap.classList.add('souts-am-mod');
            modalMap.style.display = 'flex';
            return;
        }
        if (item.classList.contains('afr-i')) {
            item.classList.add('icon__black');
            modalMap.classList.add('afr-mod');
            modalMap.style.display = 'flex';
            return;
        }
    })
})

// closeModalMap.addEventListener("click", (e) => {
//     e.preventDefault();
//     openModalMapBtns.forEach(el => {el.classList.remove('icon__black');});
//     modalMap.style.display = 'none';
//     modalMap.classList.remove('msk-mod');
//     modalMap.classList.remove('sev-am-mod');
//     modalMap.classList.remove('souts-am-mod');
//     modalMap.classList.remove('afr-mod');
// })

closeModalMap.addEventListener("click", (e) => {
    e.preventDefault();
    openModalMapBtns.forEach(el => el.classList.remove('icon__black'));
    modalMap.style.display = 'none';

    // Удаляем ВСЕ возможные классы модификаторы
    modalMap.className = modalMap.className.replace(/\b(msk|sev-am|souts-am|afr)-mod\b/g, '');
});

document.addEventListener('click', (e) => {
    if (!modalMap.contains(e.target) && !e.target.closest('.geografhy__body-icon-map')) {
        modalMap.style.display = 'none';
        modalMap.className = modalMap.className.replace(/\b(msk|sev-am|souts-am|afr)-mod\b/g, '');
        openModalMapBtns.forEach(el => el.classList.remove('icon__black'));
    }
});