import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lit-home')
export class LitHome extends LitElement {
  protected render(): unknown {
    return html` <div class="App">THE DEFAULT LIT HOME PAGE</div> `;
  }
}
