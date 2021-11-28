/* eslint-disable quotes */
import FavoriteRestaurantIdb from "../../data/favoriterestaurant-idb";

const Favorite = {
  async render() {
    return ` <app-explore></app-explore>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const appExplore = document.querySelector('app-explore');
    appExplore.header = {
      title: "Favorite Restaurants",
      subTitle: "Tempat kunyak-kunyak favorit",
    };
    appExplore.restaurants = restaurants;
  },

};

export default Favorite;
