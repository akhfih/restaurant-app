import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

/* const toggleButton = document.getElementsByClassName("navbar__toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar__link");

toggleButton.addEventListener("click", function () {
  for (var i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.toggle("active");
  }
}); */

const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav ul");

toggle.addEventListener("click", function (event) {
  nav.classList.toggle("open");
  event.stopPropagation();
});
