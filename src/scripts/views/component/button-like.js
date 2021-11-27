/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

class ButtonLike extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
  }

  set container(container) {
    this._container = container;
    this._renderButton();
  }

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  }

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  }

  _renderLike() {
    this._container.innerHTML = this._createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  }

  _renderLiked() {
    this._container.innerHTML = this._createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  }

  _createLikeButtonTemplate() {
    return `<button aria-label="like this movie" id="likeButton" class="like">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
            </button>`;
  }

  _createLikedButtonTemplate() {
    return `<button aria-label="unlike this movie" id="likeButton" class="like">
            <i class="fa fa-heart" aria-hidden="true"></i>
            </button>`;
  }
}

customElements.define('button-like', ButtonLike);
