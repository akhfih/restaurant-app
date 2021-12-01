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
      
       <div class = "failed"><img class="img-warning" src="./logo/warning.svg"> <p>Gagal Mendapatkan Data !!!</p></div>
       <style>
          .failed {
            display : flex;
            flex-direction: column;
            align-items: center;
            margin-top : 24px;
            
          }
          .img-warning {
            width : 100px;   
            margin-bottom : 20px;
          }
       </style>
        `;
  }
}

customElements.define('app-failed', AppFailed);
