import { CSSResultGroup, html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import 'lit-google-map/dist/lit-google-map.bundle.js';

import locationIcon from '../../Assets/geo-alt-fill.svg';

import { mapArrayStyle } from './map.style';

@customElement('google-map')
export class GoogleMap extends LitElement {
  constructor() {
    super();
    this.getCurrentLocationCoord();
  }

  @property({ type: Object }) coordinate = { latitude: 0, longitude: 0 };

  getCurrentLocationCoord() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.coordinate = { latitude, longitude };
      }
    );
  }

  static styles?: CSSResultGroup = [
    css`
      lit-google-map {
        height: 100vh;
        width: 400px;
        display: block;
        margin-left: auto;
      }
    `,
  ];

  render() {
    return html`<h1>GOOGLE MAP PROJECT</h1>
      <lit-google-map
        fit-to-markers
        map-id="8eb92bdbb88044c5"
        api-key="AIzaSyAZhVBD0oDM1EZlab4i1j7s5H5jdehFow4"
        center-latitude=${this.coordinate.latitude}
        center-longitude=${this.coordinate.longitude}
        .styles=${mapArrayStyle}
      >
        <lit-google-map-marker
          slot="markers"
          latitude=${this.coordinate.latitude}
          longitude=${this.coordinate.longitude}
          icon=${locationIcon}
        ></lit-google-map-marker>
        <lit-google-map-marker
          slot="markers"
          latitude="7"
          longitude="9"
          icon=${locationIcon}
        ></lit-google-map-marker>
        <lit-google-map-marker
          slot="markers"
          latitude="5"
          longitude="7"
          icon=${locationIcon}
        ></lit-google-map-marker>
      </lit-google-map> `;
  }
}
