/* eslint-disable quotes */
import UrlParser from "../../utils/url-parser";
import RestaurantSource from "../../data/restaurant-source";

const Detail = {
  async render() {
    return `<app-detail></app-detail>
            <app-reviews></app-reviews>  
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailRestaurant = document.querySelector('app-detail');
    detailRestaurant.restaurant = restaurant.restaurant;
    const reviewsRestaurant = document.querySelector('app-reviews');
    reviewsRestaurant.id = restaurant.restaurant.id;
    reviewsRestaurant.reviews = restaurant.restaurant.customerReviews;
  },
};

export default Detail;
