/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.title = this.getAttribute('title') || null;
    this.subTitle = this.getAttribute('subTitle') || null;
    this.srcLogo = this.getAttribute('srcLogo') || null;
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      ${this.getStyle()}
      <header class="header">
        <h2 tabindex="0" class="header__judul">${this.title}</h2>
          <div class="header__garis">
            <span></span>
            <img src=${this.srcLogo} alt="logo" />
            <span></span>
          </div>
        <p class="header__subjudul">${this.subTitle}</p>
      </header>
    `;
  }

  getStyle() {
    return `
      <style>
        .header {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          justify-content: center;
        }
        .header__judul { 
          color: #c6302c;
          line-height: 100%;
          margin: 0;          
        }
        .header__garis {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .header__garis span {
          border-radius: 3px;
          margin: 0 5px;
          height: 3px;
          width: 120px;
          background-color: #c6302c;
        }
        .header__subjudul {
          font-size: 16px;
          margin: 0;
        }
      </style>
    `;
  }
}

customElements.define('app-header', AppHeader);
