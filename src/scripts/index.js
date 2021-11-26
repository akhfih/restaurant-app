/* eslint-disable max-len */
import 'regenerator-runtime'; /* for async await transpile */
import './views/component/app-navbar';
import './views/component/app-hero';
import './views/component/app-category';
import './views/component/item-restaurant';
import './views/component/app-explore';
import './views/component/app-detail';
import './views/component/app-reviews';

import '../styles/main.scss';
import App from './views/app';
// import data from '../DATA.json';

const app = new App({
  button: document.querySelector('.toggle'),
  drawer: document.querySelector('.navbar ul'),
  content: document.querySelector('#maincontent'),
  header: document.querySelector('header'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

/* data.restaurants.forEach((element) => {
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
 */
