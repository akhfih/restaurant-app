import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import data from "../DATA.json";

const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav ul");
const listRestaurant = document.querySelector(".restaurant");

toggle.addEventListener("click", function (event) {
  nav.classList.toggle("open");
  event.stopPropagation();
});

console.log(listRestaurant);
data.restaurants.forEach((element) => {
  const listItemRestaurant = ` <div class="items">
                          <img
                            class="items__img"
                            src="${element.pictureId}"
                            alt="${element.name}"
                          />
                          <div class="items__sub">
                            <h3 class="items__sub__title"><a href="#">${element.name}</a></h3>
                            <p class="city">${element.city}</p>
                            <span class="items__sub__bintang"><img src="./logo/bintang.svg" alt="bintang">(${element.rating})</span>
                            <p class="items__sub__text">
                            ${element.description} ....
                            </p>
                          </div>
                        </div>
`;
  listRestaurant.innerHTML += listItemRestaurant;
});
