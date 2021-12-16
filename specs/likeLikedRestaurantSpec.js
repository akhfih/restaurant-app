/* eslint-disable no-undef */
import '../src/scripts/views/component/button-like';
import '../src/scripts/views/component/toast-notification';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div> <toast-notification></toast-notification>';
};
const putRestaurant = async (id) => {
  await FavoriteRestaurantIdb.putRestaurant(id);
};
const deleteRestaurant = async (id) => {
  await FavoriteRestaurantIdb.deleteRestaurant(id);
};

beforeEach(() => {
  addLikeButtonContainer();
});

describe('Liking Unliking A Restaurant', () => {
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
  it('should display unlike widget when the restaurant has been liked', (done) => {
    putRestaurant({ id: 1 });
    const buttonLike = document.createElement('button-like');
    buttonLike.init = {
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    };
    document.getElementById('likeButtonContainer').addEventListener('likedButton:updated', async () => {
      expect(document.querySelector('[aria-label="hapus restaurant favorite"]'))
        .toBeTruthy();
      deleteRestaurant(1);
      done();
    });
  });

  it('should not display like widget when the restaurant has been liked', (done) => {
    putRestaurant({ id: 1 });
    const buttonLike = document.createElement('button-like');
    buttonLike.init = {
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    };
    document.getElementById('likeButtonContainer').addEventListener('likedButton:updated', async () => {
      expect(document.querySelector('[aria-label="tambah restaurant favorite"]'))
        .toBeFalsy();
      deleteRestaurant(1);
      done();
    });
  });

  it('should be able to remove liked restaurant from the list', (done) => {
    putRestaurant({ id: 1 });
    const buttonLike = document.createElement('button-like');
    buttonLike.init = {
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    };
    document.getElementById('likeButtonContainer').addEventListener('likedButton:updated', async () => {
      document.querySelector('[aria-label="hapus restaurant favorite"]').dispatchEvent(new Event('click'));
      expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
      deleteRestaurant(1);
      done();
    });
  });

  it('should not throw error if the unliked restaurant is not in the list', (done) => {
    putRestaurant({ id: 1 });
    const buttonLike = document.createElement('button-like');
    buttonLike.init = {
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { id: 1 },
    };
    document.getElementById('likeButtonContainer').addEventListener('likedButton:updated', async () => {
      deleteRestaurant(1);
      document.querySelector('[aria-label="hapus restaurant favorite"]').dispatchEvent(new Event('click'));
      expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
      deleteRestaurant(1);
      done();
    });
  });
});
