import { CSSResultGroup, html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import 'lit-google-map/dist/lit-google-map.bundle.js';

import locationIcon from '../../Assets/geo-alt-fill.svg';

import { mapArrayStyle } from './map.style';

import '../customized-lit-google-map-marker/ customized-lit-google-map-marker';
import '../default-map/default-map';
@customElement('google-map')
export class GoogleMap extends LitElement {
  constructor() {
    super();
    this.getCurrentLocationCoord();
  }

  @property({ type: Object }) coordinate = { latitude: 0, longitude: 0 };

  @property({ type: Array }) stubData = [
    {
      address: {
        streetAddress:
          '494 Bangui Street, Off Adetokunbo Ademola Crescent, Wuse II',
        addressLocality: 'Abuja',
        geoCoordinate: {
          latitude: 9.06882,
          longitude: 7.48064,
        },
      },
    },
    {
      address: {
        streetAddress:
          '264 Tafawa Balewa Rd Ceddi Plaza, Central Business District',
        addressLocality: 'Abuja',
        geoCoordinate: {
          latitude: 9.055065,
          longitude: 7.489543,
        },
      },
    },
    {
      address: {
        streetAddress:
          'RiverPlate Park, Ahmadu Bello Way Opposite Harrow Park/Abia House, Wuse II District',
        addressLocality: 'Abuja',
        geoCoordinate: {
          latitude: 9.066675,
          longitude: 7.490171,
        },
      },
    },
    {
      address: {
        streetAddress: 'Ceddi Plaza',
        addressLocality: 'Abuja',
        geoCoordinate: {
          latitude: 9.055041,
          longitude: 7.489669,
        },
      },
    },
    {
      address: {
        streetAddress:
          'Imperial Bakery Complex, 7 Capetown Street, Imperial Bakery, Off IBB Way Zone 4,',
        addressLocality: 'Abuja',
        geoCoordinate: {
          latitude: 9.065355,
          longitude: 7.472923,
        },
      },
    },
    {
      address: {
        streetAddress:
          'Oshogbo Cl Opposite Nicon Luxury Hotel and close to NTA and FCDA,',
        addressLocality: 'Abuja',
        geoCoordinate: {
          latitude: 9.04564,
          longitude: 7.49579,
        },
      },
    },
    {
      address: {
        streetAddress:
          'Plot 1061 Herbert Macaulay Way Leadway House, Near Nnpc Towers',
        addressLocality: 'Abuja',
        geoCoordinate: {
          latitude: 9.052428,
          longitude: 7.485866,
        },
      },
    },
    {
      address: {
        streetAddress: 'Ladi Kwali St. C/O Sheraton Hotel',
        addressLocality: 'Abuja',
        geoCoordinate: {
          latitude: 9.06427,
          longitude: 7.48169,
        },
      },
    },
    {
      address: {
        streetAddress: '16 Bangui Street The Basement',
        addressLocality: 'Abuja',
        geoCoordinate: {
          latitude: 9.06854,
          longitude: 7.480618,
        },
      },
    },
  ];

  @property({ type: Boolean }) isOpened = false;

  toggleOpen() {
    this.isOpened = !this.isOpened;
  }
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
      <div @click=${this.toggleOpen}>
        ${this.isOpened ? 'Opened' : 'closed'}
      </div>
      <!-- <lit-google-map
        fit-to-markers
        map-id="8eb92bdbb88044c5"
        api-key="AIzaSyAZhVBD0oDM1EZlab4i1j7s5H5jdehFow4"
        center-latitude=${this.coordinate.latitude}
        center-longitude=${this.coordinate.longitude}
        .styles=${mapArrayStyle}
      >
        ${this.stubData.map(
        ({
          address: {
            streetAddress,
            geoCoordinate: { latitude, longitude },
          },
        }) => {
          return html`<p></p>
            <lit-google-map-marker
              @click=${this.toggleOpen}
              slot="markers"
              latitude=${latitude}
              longitude=${longitude}
              icon=${locationIcon}
            >
              <p>${streetAddress}</p></lit-google-map-marker
            > `;
        }
      )}
      </lit-google-map> -->

      <default-map></default-map>

      <customized-lit-google-map-marker></customized-lit-google-map-marker> `;
  }
}
