/* eslint-disable quotes */
import UrlParser from "../../utils/url-parser";
import RestaurantSource from "../../data/restaurant-source";

const Detail = {
  async render() {
    return `<h2>Halaman Detail</h2>`;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant.restaurant);
  },
};

export default Detail;
