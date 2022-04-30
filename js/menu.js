let isMenuOpen = false;

const button = document.querySelector(".menu-mobile-button");
const menu = document.querySelector(".menu-mobile");

button.addEventListener("click", function () {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    menu.classList.remove("menu-close");
    menu.classList.add("menu-open");
  } else {
    menu.classList.remove("menu-open");
    menu.classList.add("menu-close");
  }
  console.log(isMenuOpen);
});
