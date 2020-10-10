const btnBurger = document.getElementById("btnBurger");
const mainNav = document.getElementById("mainNav");
const burgerMenu = document.getElementById("burgerMenu");

btnBurger.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  mainNav.classList.toggle("active");
  btnBurger.classList.toggle("active-burger");
});