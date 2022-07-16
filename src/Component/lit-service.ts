import { html, LitElement, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

import { router } from '../index';

// const routeId = router.location;

import { services } from '../Assets/services-data';

@customElement('lit-service')
export class LitService extends LitElement {
  @property({ type: Object }) location;
  @property({ type: Number }) routeId;
  private service;

  // @property({ type: Object }) routeId = this.location?.params;
  // @property({ type: Object }) service = services.find(
  //   ({ id }) => id === routeId
  // );

  protected firstUpdated() {
    // console.log(this.routeId);
    this.routeId = this.location.params.id;
  }
  protected render(): unknown {
    return html`<div>LIT SERVICE ${this.location.params.id}</div>`;
  }
}
