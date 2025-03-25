const modalsMap = document.querySelectorAll('.geografhy__modal');
const modalMapMsk = document.querySelector('.geografhy__modal.msk-modal');
const modalMapSpb = document.querySelector('.geografhy__modal.spb-modal');
const modalMapTorun = document.querySelector('.geografhy__modal.torun-modal');
const modalMapBudapesht = document.querySelector('.geografhy__modal.budapesht-modal');
const modalMapBelgrad = document.querySelector('.geografhy__modal.belgrad-modal');
const modalMapPlodvid = document.querySelector('.geografhy__modal.plodvid-modal');
const modalMapTashkent = document.querySelector('.geografhy__modal.tashkent-modal');
const modalMapChad = document.querySelector('.geografhy__modal.chad-modal');
const modalMapNigeria = document.querySelector('.geografhy__modal.nigeria-modal');
const modalMapBolivia = document.querySelector('.geografhy__modal.bolivia-modal');
const openModalMapBtns = document.querySelectorAll('.geografhy__body-icon-map');
const closeModalMapBtns = document.querySelectorAll('.close');

openModalMapBtns.forEach((item) => {
    // console.log(item);
    item.addEventListener('click', (e) => {
        e.preventDefault();

        modalsMap.forEach(modalMap => {

            modalMap.className = modalMap.className.replace(/\b(msk|spb|torun|budapesht|belgrad|plodvid|tashkent|chad|nigeria|bolivia)-mod\b/g, '');
            modalMap.style.display = 'none';
            openModalMapBtns.forEach(el => el.classList.remove('icon__black'));
        })

        // console.log(e.currentTarget);

        if (e.currentTarget.classList.contains('msk-i')) {
            let xPosition = e.currentTarget.offsetLeft;
            modalMapMsk.classList.add('msk-mod');
            modalMapMsk.style.display = 'flex';
            modalMapMsk.style.left = `${xPosition}px`;
            modalMapMsk.style.top = `80px `;
            item.classList.add('icon__black');
            return;
        }

        if (e.currentTarget.classList.contains('spb-i')) {
            let xPosition = e.currentTarget.offsetLeft;
            modalMapSpb.classList.add('msk-mod');
            modalMapSpb.style.display = 'flex';
            modalMapSpb.style.left = `calc(${xPosition}px + 20px `;
            modalMapSpb.style.top = `80px `;
            item.classList.add('icon__black');
            return;
        }

        if (e.currentTarget.classList.contains('torun-i')) {
            let xPosition = e.currentTarget.offsetLeft;
            modalMapTorun.classList.add('msk-mod');
            modalMapTorun.style.display = 'flex';
            modalMapTorun.style.left = `calc(${xPosition}px + 20px `;
            modalMapTorun.style.top = `80px `;
            item.classList.add('icon__black');
            return;
        }

        if (e.currentTarget.classList.contains('budapesht-i')) {
            let xPosition = e.currentTarget.offsetLeft;
            modalMapBudapesht.classList.add('msk-mod');
            modalMapBudapesht.style.display = 'flex';
            modalMapBudapesht.style.left = `calc(${xPosition}px + 20px `;
            modalMapBudapesht.style.top = `80px `;
            item.classList.add('icon__black');
            return;
        }

        if (e.currentTarget.classList.contains('belgrad-i')) {
            let xPosition = e.currentTarget.offsetLeft;
            modalMapBelgrad.classList.add('msk-mod');
            modalMapBelgrad.style.display = 'flex';
            modalMapBelgrad.style.left = `calc(${xPosition}px + 20px `;
            modalMapBelgrad.style.top = `80px `;
            item.classList.add('icon__black');
            return;
        }

        if (e.currentTarget.classList.contains('plodvid-i')) {
            let xPosition = e.currentTarget.offsetLeft;
            modalMapPlodvid.classList.add('msk-mod');
            modalMapPlodvid.style.display = 'flex';
            modalMapPlodvid.style.left = `calc(${xPosition}px + 20px `;
            modalMapPlodvid.style.top = `80px `;
            item.classList.add('icon__black');
            return;
        }

        if (e.currentTarget.classList.contains('tashkent-i')) {
            let xPosition = e.currentTarget.offsetLeft;
            modalMapTashkent.classList.add('msk-mod');
            modalMapTashkent.style.display = 'flex';
            modalMapTashkent.style.right = `5px`;
            modalMapTashkent.style.left = `auto`;
            modalMapTashkent.style.top = `110px`;
            item.classList.add('icon__black');
            return;
        }

        if (e.currentTarget.classList.contains('chad-i')) {
            let xPosition = e.currentTarget.offsetLeft;
            modalMapChad.classList.add('msk-mod');
            modalMapChad.style.display = 'flex';
            modalMapChad.style.left = `calc(${xPosition}px + 20px `;
            modalMapChad.style.top = `80px `;
            item.classList.add('icon__black');
            return;
        }

        if (e.currentTarget.classList.contains('nigeria-i')) {
            let xPosition = e.currentTarget.offsetLeft;
            modalMapNigeria.classList.add('msk-mod');
            modalMapNigeria.style.display = 'flex';
            modalMapNigeria.style.left = `calc(${xPosition}px + 20px `;
            modalMapNigeria.style.top = `80px `;
            item.classList.add('icon__black');
            return;
        }

        if (e.currentTarget.classList.contains('bolivia-i')) {
            let xPosition = e.currentTarget.offsetLeft;
            modalMapBolivia.classList.add('msk-mod');
            modalMapBolivia.style.display = 'flex';
            modalMapBolivia.style.left = `calc(${xPosition}px + 20px `;
            modalMapBolivia.style.top = `80px `;
            item.classList.add('icon__black');
            return;
        }

    })
})

document.addEventListener('click', (e) => {
    modalsMap.forEach(modalMap => {
        if (!modalMap.contains(e.target) && !e.target.closest('.geografhy__body-icon-map')) {
            modalMap.style.display = 'none';
            modalMap.className = modalMap.className.replace(/\b(msk|spb|torun|budapesht|belgrad|plodvid|tashkent|chad|nigeria|bolivia)-mod\b/g, '');
            openModalMapBtns.forEach(el => el.classList.remove('icon__black'));
        }
    })
});

closeModalMapBtns.forEach(closeModalMap => {
    closeModalMap.addEventListener("click", (e) => {
        e.preventDefault();
        openModalMapBtns.forEach(el => el.classList.remove('icon__black'));
        modalsMap.forEach(modalMap => {
            modalMap.style.display = 'none';

            // Удаляем ВСЕ возможные классы модификаторы
            modalMap.className = modalMap.className.replace(/\b(msk|spb|torun|budapesht|belgrad|plodvid|tashkent|chad|nigeria|bolivia)-mod\b/g, '');
        });
    });
});