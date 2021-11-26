/* eslint-disable quotes */
import RestaurantSource from "../../data/restaurant-source";
// import '../component/item-restaurant';

const Home = {
  async render() {
    return `
        <app-hero></app-hero>
        <app-category/></app-category>
        <app-explore></app-explore>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('.restaurants');

    restaurants.forEach((restaurant) => {
      const ItemRestaurant = document.createElement('item-restaurant');
      ItemRestaurant.restaurant = restaurant;
      restaurantsContainer.appendChild(ItemRestaurant);
    });
    // console.log(restaurants);
    // console.log('tes');
    // console.log(restaurants);
    // return ``;
  },

};

export default Home;
