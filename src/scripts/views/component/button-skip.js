/* eslint-disable class-methods-use-this */
class ButtonSkip extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListener('click', () => {
      const elem = document.querySelector('#maincontent');
      elem.focus();
    });
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
        <button class="skip-link" >Menuju ke konten</button>
          `;
  }
}

customElements.define('button-skip', ButtonSkip);
