/* eslint-disable quotes */
import FavoriteRestaurantIdb from "../../data/favoriterestaurant-idb";

const Favorite = {
  async render() {
    return ` 
        <app-explore></app-explore>
        <app-loading></app-loading>`;
  },

  async afterRender() {
    const loading = document.querySelector("app-loading");
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const appExplore = document.querySelector('app-explore');
    appExplore.header = {
      title: "Favorite Restaurants",
      subTitle: "Tempat kunyak-kunyak favorit",
    };
    appExplore.restaurants = restaurants;
    loading.remove();
  },

};

export default Favorite;
