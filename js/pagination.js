document.addEventListener('DOMContentLoaded', function () {
    const wrapperCatalogCategories = document.querySelector('.catalog-categories__body');
    const content = document.querySelector('.catalog-categories__body-list');
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
    }

    function createPageButtons() {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        const paginationContainer = document.createElement('div');
        const paginationDiv = wrapperCatalogCategories.appendChild(paginationContainer);
        paginationContainer.classList.add('pagination');

        for (let i = 0; i < totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i + 1;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
                updateActiveButtonStates();
            });
            wrapperCatalogCategories.appendChild(paginationContainer);
            paginationDiv.appendChild(pageButton);
        }
    }


    function updateActiveButtonStates() {
        const pageButtons = document.querySelectorAll('.pagination button');
        pageButtons.forEach((button, index) => {
            if (index === currentPage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    createPageButtons(); // Call this function to create the page buttons initially
    showPage(currentPage);

})
