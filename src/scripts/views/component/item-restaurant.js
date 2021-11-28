/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/config';

class ItemRestaurant extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="items">
            <div>
            <img
            class="items__img"
            src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}"
            alt="${this._restaurant.name}"
            />
            </div>
            <div class="items__sub">
            <h3 class="items__sub__title"><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h3>
            <p class="city">${this._restaurant.city}</p>
            <span class="items__sub__bintang"><img src="./logo/bintang.svg" alt="bintang">(${this._restaurant.rating})</span>
            <p class="items__sub__text">
            ${this._restaurant.description} ....
            </p>
            </div>
        </div>  
        `;
  }
}

customElements.define('item-restaurant', ItemRestaurant);
