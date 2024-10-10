const headerModalOne = document.querySelector(".header-menu-madal");
const openModalBtn = document.querySelector(".modal-one");
const closeModalBtn = document.querySelector(".header-menu-madal__close-btn");

openModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  headerModalOne.style.display = "block";
});
closeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  headerModalOne.style.display = "none";
});