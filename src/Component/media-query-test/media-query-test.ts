import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import 'lit-media-query/lit-media-query.js';

@customElement('media-query-test')
export class MediaQueryTest extends LitElement {
  @property({ type: String }) _mobileQuery = '(max-width: 500px)';
  @property({ type: Boolean }) _isMobile = false;

  handleMobile(event) {
    this._isMobile = event.detail.value;
  }

  render() {
    return html` <lit-media-query
        .query=${this._mobileQuery}
        @changed=${this.handleMobile}
      ></lit-media-query>
      <div>THIS IS A TEST COMPONENT ${this._isMobile}</div>`;
  }
}
