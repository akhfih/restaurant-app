/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../utils/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, header,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._header = header;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({ button: this._button, drawer: this._drawer, content: this._content });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    // if (url === '/favorite') {
    //   document.querySelector('app-hero').remove();
    // } else {
    //   this._header.appendChild(document.createElement('app-hero'));
    // }

    this._content.innerHTML = await page.render();

    await page.afterRender();
  }
}

export default App;
