/* eslint-disable no-undef */
import '../src/scripts/views/component/button-like';
import '../src/scripts/views/component/toast-notification';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div> <toast-notification></toast-notification>';
};

beforeEach(() => {
  addLikeButtonContainer();
});

describe('Liking A Restaurant', () => {
  it('should show the like button when the restaurant has not been liked before', (done) => {
    const buttonLike = document.createElement('button-like');
    buttonLike.init = {
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    };
    document.getElementById('likeButtonContainer').addEventListener('likeButton:updated', () => {
      expect(document.querySelector('[aria-label="tambah restaurant favorite"]')).toBeTruthy();
      done();
    });
  });

  it('should not show the unlike button when the restaurant has not been liked before', (done) => {
    const buttonLike = document.createElement('button-like');
    buttonLike.init = {
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    };
    document.getElementById('likeButtonContainer').addEventListener('likeButton:updated', () => {
      expect(document.querySelector('[aria-label="hapus restaurant favorite"]')).toBeFalsy();
      done();
    });
  });

  it('should be able to like the restaurant', (done) => {
    const buttonLike = document.createElement('button-like');
    buttonLike.init = {
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    };
    document.getElementById('likeButtonContainer').addEventListener('likeButton:updated', async () => {
      document.querySelector('#likeButton').dispatchEvent(new Event('click'));
      const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
      expect(restaurant).toEqual({ id: 1 });
      await FavoriteRestaurantIdb.deleteRestaurant(1);
      done();
    });
  });

  it('should not add a restaurant again when its already liked', (done) => {
    const buttonLike = document.createElement('button-like');
    buttonLike.init = {
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    };
    document.getElementById('likeButtonContainer').addEventListener('likeButton:updated', async () => {
      await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
      document.querySelector('#likeButton').dispatchEvent(new Event('click'));
      expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
      FavoriteRestaurantIdb.deleteRestaurant(1);
      done();
    });
  });
  xit('should not add a movie when it has no id', (done) => {
    const buttonLike = document.createElement('button-like');
    buttonLike.init = {
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {},
    };
    document.getElementById('likeButtonContainer').addEventListener('likeButton:updated', async () => {
      document.querySelector('#likeButton').dispatchEvent(new Event('click'));
      expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
      done();
    });
  });
});
