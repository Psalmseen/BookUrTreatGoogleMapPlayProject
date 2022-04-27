import { CSSResultGroup, html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import stubData from '../../Assets/stub-data';

import markerIcon from '../../Assets/geo-alt-fill.svg';

import '../popup-card/popup-card';

//  This is the actual component used

@customElement('default-map')
export class DefaultMap extends LitElement {
  //  Some style to correct scroling
  static styles?: CSSResultGroup = css`
    #map {
      height: 600px;
      border: 1px solid red;
    }
    .gm-style .gm-style-iw-c {
      padding: 0;
    }
    .gm-style .gm-style-iw-d::-webkit-scrollbar {
      background-color: transparent;
      width: 0;
      height: 12px;
    }
  `;
  @property({ type: String }) callbackName = 'initMap';
  @property({ type: String }) mapsUrl =
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyAZhVBD0oDM1EZlab4i1j7s5H5jdehFow4';
  @property({ type: Array }) stubData = stubData;

  connectedCallback() {
    //  Loads the map after the device has been connected
    super.connectedCallback();
    window[this.callbackName] = this.initMap.bind(this);
    this.addScript();
  }

  addScript() {
    // This script adds the google api script to the page
    var script = document.createElement('script');
    script.src = `${this.mapsUrl}&callback=${this.callbackName}`;
    var s = document.querySelector('script') || document.body;
    s.parentNode.insertBefore(script, s);
  }

  initMap() {
    //  this is the map function
    const map = new google.maps.Map(this.shadowRoot.querySelector('#map'), {
      center: { lat: 9.05, lng: 7.48 },
      zoom: 13,
      mapId: '8eb92bdbb88044c5',
      streetViewControls: false,
      mapTypeControl: false,
    });

    map.addListener('click', () => {
      infoWindow.close();
    });

    //  create a component to be displayed in the info window
    const sampleComponent = ({ img, name, rating, address }) =>
      `<popup-card
      img="https://picsum.photos/id/${
        img + Math.floor(Math.random() * 100)
      }/200/200"
      spname="${name}"
      rating="${rating}"
      address="${address}"
    ></popup-card>
      `;

    // create an info window
    const infoWindow = new google.maps.InfoWindow({
      content: '',
      disableAutoPan: true,
    });

    // create markers from stub data
    const markers = stubData.map(
      (
        {
          businessName,
          rating,
          address: {
            streetAddress,
            addressLocality,
            geoCoordinate: { latitude, longitude },
          },
        },
        i
      ) => {
        const marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map,
          icon: {
            url: markerIcon,
          },
          animation: google.maps.Animation.DROP,
        });
        marker.addListener('click', () => {
          infoWindow.setContent('Clicked');
          infoWindow.open(map, marker);
        });

        marker.addListener('mouseover', () => {
          infoWindow.setContent(
            sampleComponent({
              img: i,
              name: businessName,
              rating,
              address: `${streetAddress} ${addressLocality}`,
            })
          );
          infoWindow.open(map, marker);
        });

        // marker.addListener('mouseout', () => {
        //   console.log('mouseout');
        //   infoWindow.close();
        // });
        return marker;
      }
    );
    // new MarkerClusterer({ markers, map });
  }

  render() {
    return html`
      <h1>THIS IS THE DEFAULT MAP</h1>
      <div id="map"></div>

      <popup-card
        img="https://picsum.photos/200"
        spname="Samson Spa"
        rating="3.7"
        address="No 1 mbahi street"
      ></popup-card>
    `;
  }
}
