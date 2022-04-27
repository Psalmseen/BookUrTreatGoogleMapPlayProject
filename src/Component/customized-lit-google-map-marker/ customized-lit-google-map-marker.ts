import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'lit-google-map/dist/lit-google-map.bundle.js';

declare global {
  interface Window {
    initMap: () => void;
  }
}

@customElement('customized-lit-google-map-marker')
export class CustomizedLitGoogleMapMarker extends LitElement {
  constructor() {
    super();
    // this.attachScript();
  }

  attachScript() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZhVBD0oDM1EZlab4i1j7s5H5jdehFow4&map_ids=8eb92bdbb88044c5&callback=initMap"
    defer
  ></script>`;

    //       // Initialize and add the map
    // function initMap(): void {
    //     ? The location of Uluru
    //     const uluru = { lat: -25.344, lng: 131.031 };
    //     ? The map, centered at Uluru
    //     const map = new google.maps.Map(
    //       document.getElementById("map") as HTMLElement,
    //       {
    //         zoom: 4,
    //         center: uluru,
    //       }
    //     );

    //     ? The marker, positioned at Uluru
    //     const marker = new google.maps.Marker({
    //       position: uluru,
    //       map: map,
    //     });
    //   }

    //   declare global {
    //     interface Window {
    //       initMap: () => void;
    //     }
    //   }
    //   window.initMap = initMap;

    // function initMap() {
    //   const map = new google.maps.Map(this.shadowRoot.querySelector('#map'), {
    //     center: { lat: 7, lng: 9 },
    //     zoom: 8,
    //     mapId: '8eb92bdbb88044c5&',
    //   });
    // }
    // window.initMap = initMap;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.querySelector('#map').innerHTML = 'Working';
    this.requestUpdate();
  }
  render() {
    return html`
      <h1>This is the customized map</h1>
      <div id="map"></div>
    `;
  }
}
