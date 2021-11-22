import './app-header';

class AppExplore extends HTMLElement {
  constructor() {
    super();
    this.titleHeader = 'Explore Restaurants';
    this.subTitleHeader = 'Tentukan Pilihanmu Jangan Ragu';
    this.srcLogoHeader = './logo/logo-red-small.svg';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <section class="explorer" id="explorer">
          <app-header title="${this.titleHeader}"" subTitle="${this.subTitleHeader}" srcLogo="${this.srcLogoHeader}"></app-header>
          <div class="restaurant"></div>
      </section>
    `;
  }
}

customElements.define('app-explore', AppExplore);
