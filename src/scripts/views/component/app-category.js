import './app-header';

class AppCategory extends HTMLElement {
  constructor() {
    super();
    this.titleHeader = 'Menu';
    this.subTitleHeader = 'Berbagai pilihan menu';
    this.srcLogoHeader = './logo/logo-red-small.svg';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<section class="menu">
        <app-header title="${this.titleHeader}"" subTitle="${this.subTitleHeader}" srcLogo="${this.srcLogoHeader}"></app-header>

        <div class="menu__list">
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/burger.png"
              alt="burger"
            />
            <a class="menu__list__item__link" href="#/search/roti">Roti</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/sandwich.png"
              alt="salad"
            />
            <a class="menu__list__item__link" href="#/search/salad">Salad</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/nasi.png"
              alt="matzo"
            />
            <a class="menu__list__item__link" href="#/search/matzo">Matzo</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/mie.png"
              alt="sup"
            />
            <a class="menu__list__item__link" href="#/search/sup">Sup</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/sea-food.png"
              alt="ikan"
            />
            <a class="menu__list__item__link" href="#/search/ikan">Ikan</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/pizza.png"
              alt="napolitana"
            />
            <a class="menu__list__item__link" href="#/search/napolitana">Napolitana</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/potato.png"
              alt="paket"
            />
            <a class="menu__list__item__link" href="#/search/paket"">Paket</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/meat.png"
              alt="daging"
            />
            <a class="menu__list__item__link" href="#/search/daging">Daging</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/tea.png"
              alt="teh"
            />
            <a class="menu__list__item__link" href="#/search/teh">Teh</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/coffee.png"
              alt="kopi"
            />
            <a class="menu__list__item__link" href="#/search/kopi">Kopi</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/juice.png"
              alt="jus"
            />
            <a class="menu__list__item__link" href="#/search/jus"">Jus</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/orange.png"
              alt="sirup"
            />
            <a class="menu__list__item__link" href="#/search/sirup">Sirup</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/ice.png"
              alt="es"
            />
            <a class="menu__list__item__link" href="#/search/es">Es</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/milk.png"
              alt="coklat"
            />
            <a class="menu__list__item__link" href="#/search/coklat">Coklat</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/akua.png"
              alt="air"
            />
            <a class="menu__list__item__link" href="#/search/air">Ari</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/soda.png"
              alt="soda"
            />
            <a class="menu__list__item__link" href="#/search/soda">Soda</a>
          </div>
        </div>
      </section>`;
  }
}

customElements.define('app-category', AppCategory);
