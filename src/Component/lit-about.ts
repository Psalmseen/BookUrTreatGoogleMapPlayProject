import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lit-about')
export class LitAbout extends LitElement {
  protected render(): unknown {
    return html` <div class="App">THIS IS THE ABOUT PAGE</div> `;
  }
}
