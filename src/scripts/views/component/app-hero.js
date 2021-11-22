class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ` <div class="hero">
                            <div class="hero__inner">
                            <h1 class="hero__title">maaeem</h1>
                            <p class="hero__tagline">
                                Temukan tanpa ragu tempat kunyah-kunyah enak bersama orang tercinta,
                                keluarga, dan teman-teman.
                            </p>
                            <a href="#explorer" class="hero__button">Explore</a>
                            </div>
                        </div>`;
  }
}

customElements.define('app-hero', AppHero);
