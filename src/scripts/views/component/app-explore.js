/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import './app-header';

class AppExplore extends HTMLElement {
  constructor() {
    super();
    this.subTitleHeader = 'Tentukan Pilihanmu Jangan Ragu';
    this.srcLogoHeader = './logo/logo-red-small.svg';
  }

  set header(header) {
    this._header = header;
    this.render();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.getItemRestaurant();
  }

  connectedCallback() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <section class="explorer" id="explorer">
          <app-header title="${this._header.title}" subTitle="${this._header.subTitle}" srcLogo="${this.srcLogoHeader}"></app-header>
          <div class="restaurants"></div>         
      </section>
    `;
  }

  getItemRestaurant() {
    return this._restaurants.forEach((restaurant) => {
      const ItemRestaurant = document.createElement('item-restaurant');
      ItemRestaurant.restaurant = restaurant;
      document.querySelector('.restaurants').appendChild(ItemRestaurant);
    });
  }
}

customElements.define('app-explore', AppExplore);
