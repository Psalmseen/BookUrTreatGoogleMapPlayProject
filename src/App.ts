import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-app')
export class MyApp extends LitElement {
  @property({ type: Boolean }) isOnService = false;
  protected render(): unknown {
    return html`
      <div class="App">
        <a href="/"> Home</a>
        <a href="/about"> About Us</a>
        <a href="/services"> Our Services</a>
      </div>
      ${this.isOnService.toString().toUpperCase()}
      <slot @slotchange=${this.handleSlotChange}></slot>
    `;
  }
  handleSlotChange() {
    console.log('slot changed');
    console.log(this.querySelector('lit-services'));
    this.isOnService = !!this.querySelector('lit-services');
  }
}
