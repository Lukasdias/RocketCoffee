if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

localStorage.theme = "light";
localStorage.theme = "dark";
localStorage.removeItem("theme");

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const collapseMenu = document.querySelector(".collapse");
const collapseFirstButton = document.getElementById("collapse-first-btn");

openMenu.addEventListener("click", () => {
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  collapseMenu.classList.remove("hidden");
  collapseFirstButton.focus();
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.add("hidden");
  openMenu.classList.remove("hidden");
  collapseMenu.classList.add("hidden");
});
