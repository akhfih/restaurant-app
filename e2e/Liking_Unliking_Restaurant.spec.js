/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Tidak ada item Restaurant', '.restaurant__item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada item Restaurant', '.restaurant__item__not__found');

  I.amOnPage('/');
  I.seeElement('.items__sub__title');
  const firstRestaurant = locate('.items__sub__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.items');
  const likedRestaurantTitle = await I.grabTextFrom('.items__sub__title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada item Restaurant', '.restaurant__item__not__found');

  I.amOnPage('/');
  I.seeElement('.items__sub__title');
  const firstRestaurant = locate('.items__sub__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.items');
  const likedRestaurantTitle = await I.grabTextFrom('.items__sub__title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.see('Tidak ada item Restaurant', '.restaurant__item__not__found');
});
