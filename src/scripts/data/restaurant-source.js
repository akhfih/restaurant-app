import API_ENDPOINT from '../globals/api-endpoint';

export default class RestaurantSource {
  static async listRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch {
      return 'gagal';
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch {
      return 'gagal';
    }
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    return response.json();
  }

  static async reviewRestaurant(review) {
    try {
      const Options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
      };
      const response = await fetch(API_ENDPOINT.REVIEW, Options);
      const data = await response.json();
      return data;
    } catch {
      return 'gagal';
    }
  }
}
