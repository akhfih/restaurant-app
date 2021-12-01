/* eslint-disable quotes */
import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../utils/url-parser";
// import '../component/item-restaurant';

const Search = {
  async render() {
    return `       
        <div class="loadingContainer">
          <app-explore></app-explore>
          </div>
    `;
  },

  async afterRender() {
    const loading = document.createElement("app-loading");
    const loadingContaiter = document.querySelector(".loadingContainer");
    const appExplore = document.querySelector('app-explore');
    loadingContaiter.appendChild(loading);

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.searchRestaurant(url.id);
    appExplore.header = {
      title: "Search Restaurants",
      subTitle: `Restaurant menyediakan ${url.id}`,
    };

    if (restaurants === 'gagal') {
      loadingContaiter.innerHTML = "<app-failed></app-failed>";
    } else {
      appExplore.restaurants = restaurants.restaurants;
    }
    loading.remove();
  },

};

export default Search;
