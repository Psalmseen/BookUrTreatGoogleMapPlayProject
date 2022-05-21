import { CSSResultGroup, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { d3LineGraphStyles } from './d3-linegraph.styles';

@customElement('d3-linegraph')
export class D3Linegraph extends LitElement {
  static styles: CSSResultGroup = d3LineGraphStyles;
  render() {
    return html`<div class="linegraph">
      <h2 class="heading">Recent Sales</h2>
      <p class="heading__text">All locations, last 7 days</p>
      <h2 class="booked">$8,225.00</h2>
      <div class="appointment">
        <p class="appointment__detail">Appointments <span>22</span></p>
        <p class="appointment__status">Sales</p>
      </div>
      <div class="appointment">
        <p class="appointment__detail">
          Appointments value <span> $25.00 </span>
        </p>
        <p class="appointment__status">Appointments</p>
      </div>
      <svg></svg>
    </div>`;
  }
}
