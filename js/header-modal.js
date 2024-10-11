const headerModalOne = document.querySelector(".header-menu-madal");
const headerModalTwo = document.querySelector(".header-menu-madal2");
const openModalBtnOne = document.querySelector(".modal-one");
const openModalBtnTwo = document.querySelector(".modal-two");
const closeModalBtn = document.querySelector(".header-menu-madal__close-btn");
const closeModalBtnTwo = document.querySelector(".header-menu-madal__close-btn2");

openModalBtnOne.addEventListener("click", (e) => {
  e.preventDefault();
  headerModalOne.style.display = "block";
});
closeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  headerModalOne.style.display = "none";
});

openModalBtnTwo.addEventListener("click", (e) => {
  e.preventDefault();
  headerModalTwo.style.display = "block";
});
closeModalBtnTwo.addEventListener("click", (e) => {
  e.preventDefault();
  headerModalTwo.style.display = "none";
});