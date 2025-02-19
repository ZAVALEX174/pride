document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const modal = document.querySelector('.modals');
    const modalFormOtzivi = modal.querySelector('.modals-form-representation-otzivi');

    const openModalOtzivi = document.querySelector('.our-projects-cart__btn-open-modal-form');
    const openModalOtziviAll = document.querySelectorAll('.our-projects-cart__btn-open-modal-form');
    const closeModalOtziviBtn = document.querySelector('.otzivi-close');

    openModalOtziviAll.forEach((openModal) => {
        openModal.addEventListener('click', () => {

            // Фиксируем ширину страницы
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            body.style.overflow = 'hidden'; // Отключаем скролл страницы
            body.style.paddingRight = `${scrollbarWidth}px`; // Компенсируем ширину скролла
            modal.classList.add('modals_opened');
            // modalFormZakaz.classList.remove('none');
            modalFormOtzivi.classList.remove('none');
        })

        closeModalOtziviBtn.addEventListener('click', () => {
            // Восстанавливаем ширину страницы
            body.style.overflow = ''; // Включаем скролл страницы
            body.style.paddingRight = ''; // Убираем компенсацию ширины скролла
            modal.classList.remove('modals_opened');
            modalFormOtzivi.classList.add('none');
        })
    })

    openModalOtzivi.addEventListener('click', () => {

        // Фиксируем ширину страницы
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        body.style.overflow = 'hidden'; // Отключаем скролл страницы
        body.style.paddingRight = `${scrollbarWidth}px`; // Компенсируем ширину скролла
        modal.classList.add('modals_opened');
        // modalFormZakaz.classList.remove('none');
        modalFormOtzivi.classList.remove('none');
    })

    closeModalOtziviBtn.addEventListener('click', () => {
        // Восстанавливаем ширину страницы
        body.style.overflow = ''; // Включаем скролл страницы
        body.style.paddingRight = ''; // Убираем компенсацию ширины скролла
        modal.classList.remove('modals_opened');
        modalFormOtzivi.classList.add('none');
    })


    $(document).click(function (e) {
        if ($(e.target).is('.modals__wrapper')) {
            modal.classList.remove('modals_opened');
            modalFormOtzivi.classList.add('none');
        }
    });

});