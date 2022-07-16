// import { html, LitElement } from 'lit';
// import { customElement, query } from 'lit/decorators.js';
// @customElement('script-init')
// export class ScriptInit extends LitElement {
//   constructor() {
//     super();
//     const s = document.head;
//     const script = document.createElement('script');
//     script.src = './src/router';
//     script.type = 'module';
//     s.appendChild(script);
//   }
//   protected render(): unknown {
//     return html` <script type="module" src="./src/router"></script>`;
//   }
// }

// const attachScript = () => {
//   const s = document.head;
//   const script = document.createElement('script');
//   script.src = './src/router';
//   script.type = 'module';
//   s.appendChild(script);
// };

// attachScript();

//  ! Load the router in the index.ts

import { Router } from '@vaadin/router';
import { routes } from './router.js';

window.addEventListener('load', () => {
  initRouter();
});

export const router = new Router(document.querySelector('#outlet'));
function initRouter() {
  router.setRoutes([...routes]);
}
