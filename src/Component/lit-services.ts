import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { services } from '../Assets/services-data';
import { Router } from '@vaadin/router';

@customElement('lit-services')
export class MyApp extends LitElement {
  @property({ type: Array }) services: {
    id: number;
    title: string;
    desc: string;
  }[] = services;
  protected render(): unknown {
    return html`
      <div class="App">
        ${this.services.map(
          ({ id, title, desc }) => html`
            <div>
              ${title}
              <span @click=${() => this.handleClick(id)}> View Details </span>
            </div>
          `
        )}
      </div>
    `;
  }

  handleClick(id: number) {
    Router.go(`/services/${id}`);
  }
}
