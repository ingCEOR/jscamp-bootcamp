class DevJobsAvatar extends HTMLElement {
   constructor() {
       super();
       this.attachShadow({ mode: 'open' });
   }

    connectedCallback(){
       this.render();
   }

   createUrl(service, username){
    return `https://unavatar.io/${service}/${username}`;
   }

   render(){

    const service = this.getAttribute('service') ?? 'github';
    const username = this.getAttribute('username') ?? 'midudev';
    const size = this.getAttribute('size') ?? '40';
    const avatarUrl = this.createUrl(service, username);
    this.shadowRoot.innerHTML = `
    <style>
       :host {
            width: ${size}px;
            height: ${size}px;
        }
        img {
            cursor: pointer;
            border-radius: 50%;
            width: 100%;
            height: 100%;
        }
      </style>
    <img
      src="${avatarUrl}"
      alt="Avatar de ${username}"
      class="avatar"
    />
    `;
   }
}
customElements.define('devjobs-avatar', DevJobsAvatar);