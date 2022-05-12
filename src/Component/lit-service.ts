import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

import { router } from '../index';

// const routeId = router.location;

import { services } from '../Assets/services-data';

@customElement('lit-service')
export class LitService extends LitElement {
  constructor() {
    super();
    console.log(this.routeId);
  }

  @property({ type: Object }) routeId = router.location;
  // @property({ type: Object }) service = services.find(
  //   ({ id }) => id === routeId
  // );

  protected render(): unknown {
    return html`<div>LIT SERVICE</div>`;
  }
}
