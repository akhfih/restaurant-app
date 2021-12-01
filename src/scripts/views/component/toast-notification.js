/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import './app-failed';

class ToastNotification extends HTMLElement {
  set message(message) {
    this._message = message;
    this.render();
    this.showToast(this._message);
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `${this.getStyle()}
            <div id="toast"></div>`;
  }

  getStyle() {
    return `
    <style>
      #toast{
        position:fixed;
        top:0;
        left:50%;
        transform:translate(-50%);
        background-color:#f3f0f0;
        color:#92201d;
        padding:16px;
        border-radius:4px;
        text-align:center;
        z-index:9999;
        box-shadow:0 0 20px rgba(0,0,0,0.3);
        visibility:hidden;
        opacity:0;
        min-width : 300px;
        border-radius: 10px;
      }
      
      #toast.show{
        visibility:visible;
        animation:fadeInOut 3s;
      }
      
      @keyframes fadeInOut{
        5%,95%{opacity:1;top:100px}
        15%,85%{opacity:1;top:100px}
      }
      </style>
      `;
  }

  showToast(text) {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    toast.innerHTML = text;
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

customElements.define('toast-notification', ToastNotification);
