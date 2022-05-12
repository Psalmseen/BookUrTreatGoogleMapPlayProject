import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-app')
export class MyApp extends LitElement {
  protected render(): unknown {
    return html`
      <div class="App">
        <a href="/"> Home</a>
        <a href="/about"> About Us</a>
        <a href="/services"> Our Services</a>
      </div>
      <slot></slot>
    `;
  }
}
