window.addEventListener('DOMContentLoaded', () => {

    const buttonsTabs = document.querySelectorAll('.questions-answers-tabs__item');
    const items = document.querySelectorAll('.item__desc');

    buttonsTabs.forEach(buttonTab => {

        buttonTab.addEventListener('click', (e) => {
            e.preventDefault();

            const desk = buttonTab.querySelector('.item__desc');

            if (desk.classList.contains('item__desc_click')) {
                buttonTab.classList.remove('questions-answers-tabs__item_click');
                desk.classList.remove('item__desc_click');
            } else {
                items.forEach(item => {
                    item.classList.remove('item__desc_click');
                })
                buttonsTabs.forEach(itembtn => {
                    itembtn.classList.remove('questions-answers-tabs__item_click');
                    itembtn.classList.remove('questions-answers-tabs__item_click::after');
                })
                desk.classList.add('item__desc_click');
                buttonTab.classList.add('questions-answers-tabs__item_click');
                buttonTab.classList.add('questions-answers-tabs__item_click::after');
            }

        })
    })
});