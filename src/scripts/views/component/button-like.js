/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

class ButtonLike extends HTMLElement {
  set init(init) {
    this._container = init.likeButtonContainer;
    this._restaurant = init.restaurant;
    this._renderButton();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
  }

  set container(container) {
    this._container = container;
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
      this._toastNotification('Berhasil ditambahkan ke favorite');
    });
    document.getElementById('likeButtonContainer').dispatchEvent(new Event('likeButton:updated'));
  }

  _renderLiked() {
    this._container.innerHTML = this._createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
      this._toastNotification('Berhasil hapus dari favorite');
    });
  }

  _createLikeButtonTemplate() {
    return `<button aria-label="tambah restaurant favorite" id="likeButton" class="like">
               +
            </button>`;
  }

  _createLikedButtonTemplate() {
    return `<button aria-label="hapus restaurant favorite"  id="likeButton" class="like">
              -
            </button>`;
  }

  _toastNotification(message) {
    const toast = document.querySelector('toast-notification');
    toast.message = message;
  }
}

customElements.define('button-like', ButtonLike);
