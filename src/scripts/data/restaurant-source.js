import API_ENDPOINT from '../globals/api-endpoint';

export default class RestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    // console.log(response);
    const responseJson = await response.json();
    // console.log(responseJson.restaurants);
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
