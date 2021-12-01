/* eslint-disable class-methods-use-this */
class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return '<footer><p>Copyright © 2021 - maaeem</p></footer>';
  }
}

customElements.define('app-footer', AppFooter);
