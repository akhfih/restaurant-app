/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import './app-header';
import RestaurantSource from '../../data/restaurant-source';

class AppReviews extends HTMLElement {
  constructor() {
    super();
    this.titleHeader = 'Customer Reviews';
    this.subTitleHeader = 'Apa Kata mereka';
    this.srcLogoHeader = './logo/logo-red-small.svg';
  }

  set id(id) {
    this._id = id;
  }

  set reviews(reviews) {
    this._reviews = reviews.reverse();
    this.render();
    this.handleReview();
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  handleReview() {
    const buttonSend = document.querySelector('#buttonSend');
    this._inputNama = document.querySelector('#inputNama');
    this._inputReview = document.querySelector('#inputReview');

    buttonSend.addEventListener('click', async () => {
      const data = {
        id: this._id,
        name: this._inputNama.value,
        review: this._inputReview.value,
      };
      const review = await RestaurantSource.reviewRestaurant(data);
      if (review === 'gagal') {
        this.toastNotification('gagal menambahkan review');
      } else if (review.error) {
        this.toastNotification(`Review ${review.message}`);
      } else {
        this.toastNotification('berhasil menambahkan review');
        this._reviews = review.customerReviews.reverse();
        this.render();
      }
    });
  }

  getTemplate() {
    return `
      <section class="reviews" >
          <app-header title="${this.titleHeader}" subTitle="${this.subTitleHeader}" srcLogo="${this.srcLogoHeader}"></app-header>
                    
          <div class="form-review" >
            <label for="inputNama" class="sub-title" >Nama</h3>
            <input id="inputNama" type="text">     
            <label for="inputReview" class="sub-title" >Review</h3>
            <textarea id="inputReview"></textarea>
            <button id="buttonSend">Send</button>
          </div>
          
          ${this.itemReview()}       
          
      </section>
    `;
  }

  itemReview() {
    return (this._reviews.map((review) => `<div class="item-review">
            <h3 class="sub-title" >${review.name}</h3>
            <p>${review.date}</p>    
            <p>"${review.review}"</p>    
            </div>`).join(''));
  }

  toastNotification(message) {
    const toast = document.querySelector('toast-notification');
    toast.message = message;
  }
}

customElements.define('app-reviews', AppReviews);
