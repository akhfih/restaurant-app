/* eslint-disable max-len */
import 'regenerator-runtime'; /* for async await transpile */
import './views/component/app-navbar';
import './views/component/button-skip';
import './views/component/app-footer';
import './views/component/app-hero';
import './views/component/app-category';
import './views/component/item-restaurant';
import './views/component/app-explore';
import './views/component/app-detail';
import './views/component/app-reviews';
import './views/component/button-like';
import './views/component/app-loading';
import './views/component/app-failed';
import './views/component/toast-notification';
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.toggle'),
  drawer: document.querySelector('.navbar ul'),
  content: document.querySelector('#maincontent'),
  header: document.querySelector('header'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
