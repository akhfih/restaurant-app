/* eslint-disable quotes */
import UrlParser from "../../utils/url-parser";
import RestaurantSource from "../../data/restaurant-source";

const Detail = {
  async render() {
    return `<app-detail></app-detail>
            <app-reviews></app-reviews>  
            <div class="loadingContainer">
            <app-explore></app-explore></div>
            <div class="likeButtonContainer"></div>
            
    `;
  },
  async afterRender() {
    const loading = document.createElement("app-loading");
    const loadingContaiter = document.querySelector(".loadingContainer");
    loadingContaiter.appendChild(loading);

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);

    if (restaurant === 'gagal') {
      loadingContaiter.innerHTML = "<app-failed></app-failed>";
    } else {
      const detailRestaurant = document.querySelector('app-detail');
      detailRestaurant.restaurant = restaurant.restaurant;

      const reviewsRestaurant = document.querySelector('app-reviews');
      reviewsRestaurant.id = restaurant.restaurant.id;
      reviewsRestaurant.reviews = restaurant.restaurant.customerReviews;
      loading.remove();

      const likeButtonContainer = document.querySelector('.likeButtonContainer');
      const buttonLike = document.createElement("button-like");
      buttonLike.restaurant = restaurant.restaurant;
      buttonLike.container = likeButtonContainer;
    }
  },
};

export default Detail;
