import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sample-element')
export class SampleElement extends LitElement {
  @property({ type: Number }) value = 0;
  @property({ type: Object }) object = { new: 'newObject' };
  render() {
    return html`<div>
      HELLO WORLD ${this.value} ${JSON.stringify(this.object)}
    </div>`;
  }
}
