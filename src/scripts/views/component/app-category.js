import './app-header';

class AppCategory extends HTMLElement {
  constructor() {
    super();
    this.titleHeader = 'Menu';
    this.subTitleHeader = 'Berbagai pilihan menu';
    this.srcLogoHeader = './logo/logo-red-small.svg';
    // this.registerOtherComponents();
  }

  connectedCallback() {
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  // registerOtherComponents() {
  //   if (typeof customElements.get('custom-header') === 'undefined') {
  //     customElements.define('app-header', AppHeader);
  //   }
  // }

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
            <a class="menu__list__item__link" href="#">Burger</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/sandwich.png"
              alt="sandwich"
            />
            <a class="menu__list__item__link" href="#">Sandwich</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/nasi.png"
              alt="nasi"
            />
            <a class="menu__list__item__link" href="#">Nasi</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/mie.png"
              alt="mie"
            />
            <a class="menu__list__item__link" href="#">Mie</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/sea-food.png"
              alt="seafood"
            />
            <a class="menu__list__item__link" href="#">Sea Food</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/pizza.png"
              alt="pizza"
            />
            <a class="menu__list__item__link" href="#">Pizza</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/potato.png"
              alt="potato"
            />
            <a class="menu__list__item__link" href="#">Potato</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/meat.png"
              alt="meat"
            />
            <a class="menu__list__item__link" href="#">Meat</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/tea.png"
              alt="tea"
            />
            <a class="menu__list__item__link" href="#">Tea</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/coffee.png"
              alt="coffee"
            />
            <a class="menu__list__item__link" href="#">Coffee</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/juice.png"
              alt="juice"
            />
            <a class="menu__list__item__link" href="#">Juice</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/orange.png"
              alt="orange"
            />
            <a class="menu__list__item__link" href="#">Orange</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/ice.png"
              alt="ice"
            />
            <a class="menu__list__item__link" href="#">Ice</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/milk.png"
              alt="milk"
            />
            <a class="menu__list__item__link" href="#">Milk</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/akua.png"
              alt="akua"
            />
            <a class="menu__list__item__link" href="#">Akua</a>
          </div>
          <div class="menu__list__item">
            <img
              class="menu__list__item__img"
              src="images/menu/soda.png"
              alt="soda"
            />
            <a class="menu__list__item__link" href="#">Soda</a>
          </div>
        </div>
      </section>`;
  }
}

customElements.define('app-category', AppCategory);
