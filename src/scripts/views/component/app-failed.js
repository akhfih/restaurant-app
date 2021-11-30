/* eslint-disable class-methods-use-this */
class AppFailed extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
       <div><p>Gagal Mendapatkan Data !!!</p></div>
       <style>
          p {
            font-size : 25px;
          }
       </style>
        `;
  }
}

customElements.define('app-failed', AppFailed);
