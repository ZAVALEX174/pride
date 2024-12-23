const modalMap = document.querySelector('.geografhy__modal');
// console.log(modalMap)
const openModalMapBtns = document.querySelectorAll('.geografhy__body-icon-map svg');
// console.log(openModalMapBtns)
const closeModalMap = document.querySelector('.close');

openModalMapBtns.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        // e.stopPropagation();
        // console.log(e.target);
        if (item.classList.contains('msk-i')) {
            modalMap.classList.add('msk-mod');
            modalMap.style.display = 'flex';
            return;
        }
        if (item.classList.contains('sev-am-i')) {
            modalMap.classList.add('sev-am-mod');
            modalMap.style.display = 'flex';
            return;
        }
        if (item.classList.contains('souts-am-i')) {
            modalMap.classList.add('souts-am-mod');
            modalMap.style.display = 'flex';
            return;
        }
        if (item.classList.contains('afr-i')) {
            modalMap.classList.add('afr-mod');
            modalMap.style.display = 'flex';
            return;
        }
    })
})

closeModalMap.addEventListener("click", (e) => {
    e.preventDefault();
    modalMap.style.display = 'none';
    modalMap.classList.remove('msk-mod');
    modalMap.classList.remove('sev-am-mod');
    modalMap.classList.remove('souts-am-mod');
    modalMap.classList.remove('afr-mod');
})