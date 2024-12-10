document.addEventListener('DOMContentLoaded', function () {

  // для удаления и появления hover эффекта

  const catalogMenuCards = document.querySelectorAll('.catalog-menu-categories__body-item');
  // console.log(catalogMenuCards);

  catalogMenuCards.forEach((el) => el.addEventListener('mouseover', () => {
    const catalogMenuCards2 = document.querySelectorAll('.catalog-menu-categories__body-item');
    catalogMenuCards2.forEach((elem) => {
      elem.classList.remove('catalog-menu-categories__body-item-hover');
    })
    el.classList.add('catalog-menu-categories__body-item');
  }))
});



