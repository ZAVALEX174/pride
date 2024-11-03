window.addEventListener('DOMContentLoaded', () => {

    const buttonsTabs = document.querySelectorAll('.questions-answers-tabs__item');
    const items = document.querySelectorAll('.item__desc');

    buttonsTabs.forEach(buttonTab => {

        buttonTab.addEventListener('click', (e) => {
            e.preventDefault();
            const desk = buttonTab.querySelector('.item__desc');

            if (desk.classList.contains('item__desc_click')) {

                desk.classList.remove('item__desc_click');
            } else {
                items.forEach(item => {
                    item.classList.remove('item__desc_click');
                })
                desk.classList.add('item__desc_click');
            }

        })


    })
    // items.forEach(item => {
    //     if (item.classList.contains('item__desc_click')) {
    //         item.classList.remove('item__desc_click');
    //     }
    // })

});