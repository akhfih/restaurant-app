/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import './app-header';
import CONFIG from '../../globals/config';

class AppDetail extends HTMLElement {
  constructor() {
    super();
    this.titleHeader = 'Detail Restaurant';
    this.subTitleHeader = ' ';
    this.srcLogoHeader = './logo/logo-red-small.svg';
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  connectedCallback() {
    window.scrollTo(0, 0);
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <section class="detail">
          <app-header title="${this._restaurant.name}" subTitle="${this._restaurant.address}, ${this._restaurant.city}" srcLogo="${this.srcLogoHeader}"></app-header>
          <div class="restaurant-detail">           
            <img
            class="items__img"
            src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}"
            alt="${this._restaurant.name}"
            />
            <div class="description" >
              <h3 class="sub-title" >Category</h3>
              <p>${this._restaurant.categories.map((key) => key.name).join(', ')}</p>
              <h3 class="sub-title" >Rating</h3>
              <p><img src="./logo/bintang.svg" alt="bintang">(${this._restaurant.rating})</p>
              <h3 class="sub-title" >Address</h3>
              <p>${this._restaurant.address}</p>
              <h3 class="sub-title" >Description</h3>
              <p>${this._restaurant.description}</p>
              <h3 class="sub-title" >Food Menus</h3>
              <p>${this._restaurant.menus.foods.map((key) => key.name).join(', ')}</p>
              <h3 class="sub-title" >Drinks Menus</h3>
              <p>${this._restaurant.menus.drinks.map((key) => key.name).join(', ')}</p>
            </div>
          </div>
      </section>
    `;
  }
}

customElements.define('app-detail', AppDetail);
