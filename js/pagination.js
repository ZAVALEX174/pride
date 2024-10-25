document.addEventListener('DOMContentLoaded', function () {
    const wrapperCatalogCategories = document.querySelector('.pagination-wrap');
    const ulBtn = document.querySelector('.ul-btn');
    const content = document.querySelector('.catalog-categories__body-list');
    const nextBtn = wrapperCatalogCategories.querySelector('.next-btn');
    const prevBtn = wrapperCatalogCategories.querySelector('.prev-btn');
    const itemsPerPage = 6;
    let currentPage = 0;
    const items = Array.from(content.getElementsByTagName('li'));

    function showPage(page) {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        items.forEach((item, index) => {
            item.classList.toggle('catalog-categories__body-item_hidden', index < startIndex || index >= endIndex);
        });
        updateActiveButtonStates();
        nextBtn.classList.remove('none');
    }

    function createPageButtons() {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        ulBtn.classList.add('pagination');

        for (let i = 0; i < totalPages; i++) {
            const pageButton = document.createElement('li');
            pageButton.classList.add('li-pag-btn')
            pageButton.textContent = i + 1;
            pageButton.addEventListener('click', (e) => {
                currentPage = i;
                window.scrollTo(0, 800);
                showPage(currentPage);
                updateActiveButtonStates();

            });

            ulBtn.appendChild(pageButton);
        }
    }

    function updateActiveButtonStates() {
        const pageButtons = document.querySelectorAll('.pagination li');
        pageButtons.forEach((button, index) => {

            if (index === currentPage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');

            }
            if (currentPage == 0) {
                prevBtn.classList.add('none');
            } else {
                prevBtn.classList.remove('none');
            }
        });
    }

    prevBtn.classList.add('none');
    createPageButtons(); // Call this function to create the page buttons initially

    showPage(currentPage);

    const liBtns = document.querySelectorAll('.li-pag-btn');

    const hendlerBtn = (e) => {
        const currentActiveLi = document.querySelector('.pagination li.active');
        let newActive;

        if (e.target.closest('.next-btn')) {
            newActive = currentActiveLi.nextElementSibling;
            currentPage++;
            window.scrollTo(0, 800);
            showPage(currentPage);

            if (currentPage == liBtns.length - 1) {
                nextBtn.classList.add('none');
                prevBtn.classList.remove('none');
            }

        } else {
            newActive = currentActiveLi.previousElementSibling;
            currentPage--;
            window.scrollTo(0, 800);
            showPage(currentPage);
            nextBtn.classList.remove('none');

            if (currentPage == liBtns[1].value) {
                prevBtn.classList.add('none')
            }
        }

        if (!newActive && e.target.closest('.next-btn')) {
            newActive = liBtns[0];
        } else if (!newActive) {
            newActive = liBtns[liBtns.length - 1];
        }

        currentActiveLi.classList.remove('active');
        newActive.classList.add('active');
    }

    nextBtn.addEventListener('click', hendlerBtn);
    prevBtn.addEventListener('click', hendlerBtn);

    // удаляем кнопку Вперёд, если было нажатие на последнюю кнопку
    const arrBtns = Array.from(liBtns);
    const lastEl = Array.from(arrBtns).pop();

    arrBtns.forEach((arr) => {
        arr.addEventListener('click', (e) => {
            // console.log(e.currentTarget);
            if (e.currentTarget == lastEl) {
                nextBtn.classList.add('none')
            }
        })
    })
})
