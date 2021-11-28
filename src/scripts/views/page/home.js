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
    const appExplore = document.querySelector('app-explore');
    appExplore.header = {
      title: "Explorer",
      subTitle: "Tentukan Pilihanmu Jangan Ragu",
    };
    appExplore.restaurants = restaurants;
  },

};

export default Home;
