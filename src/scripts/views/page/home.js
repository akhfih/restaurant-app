/* eslint-disable quotes */
import RestaurantSource from "../../data/restaurant-source";

const Home = {
  async render() {
    return `<app-hero></app-hero>
            <app-category/></app-category>
            <div class="loadingContainer">
            <app-explore></app-explore></div>`;
  },

  async afterRender() {
    const loading = document.createElement("app-loading");
    const loadingContaiter = document.querySelector(".loadingContainer");
    const appExplore = document.querySelector('app-explore');
    appExplore.header = {
      title: "Explorer",
      subTitle: "Tentukan Pilihanmu Jangan Ragu",
    };
    loadingContaiter.appendChild(loading);

    const restaurants = await RestaurantSource.listRestaurants();
    loading.remove();
    if (restaurants === 'gagal') {
      loadingContaiter.innerHTML = "<app-failed></app-failed>";
    } else {
      appExplore.restaurants = restaurants;
    }
    return restaurants;
  },

};

export default Home;
