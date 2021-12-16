/* eslint-disable class-methods-use-this */

class AppLoading extends HTMLElement {
  connectedCallback() {
    window.scroll({
      top: 0,
      left: 0,
    });
    this.render();
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return '<div class = "failed"><img class="img-warning" src="./logo/loading.svg"></div>';
  }
}

customElements.define('app-loading', AppLoading);
