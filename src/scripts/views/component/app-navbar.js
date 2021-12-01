class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="navbar">
                        <div class="logo"><img src="./logo/logo.svg" alt="logo" />maaeem</div>
                        <button class="toggle" aria-label="Hamburger button">☰</button>
                        <ul>
                            <li><a href="#/home">Home</a></li>
                            <li><a href="#/favorite">Favorite</a></li>
                            <li><a href="https://www.instagram.com/akhfih">About Us</a></li>
                        </ul>
                     </nav>`;
  }
}

customElements.define('app-navbar', AppNavbar);
