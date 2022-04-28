import { html, LitElement, CSSResultGroup, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import svg from '../../Assets/star.svg';
import gallery from '../../Assets/images.svg';

@customElement('popup-card')
export class PopupCard extends LitElement {
  @property({ type: String }) img = '';
  @property({ type: String }) spName = '';
  @property({ type: Number }) rating = 0;
  @property({ type: String }) address = '';

  static styles: CSSResultGroup = css`
    * {
      margin: 0;
      padding: 0;
      font-size: 0.75rem;
    }
    .popup-card {
      display: flex;
      padding: 12px;
      border-radius: 4px;
      align-items: center;
      gap: 0.5rem;
      width: max-content;
      background-color: #fff;
    }
    .image-wrapper {
      height: 6rem;
      width: 6rem;
    }
    .image-wrapper img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
      object-position: center;
    }
    .header-wrapper {
      display: flex;
      align-items: center;
    }
    .header-wrapper h1 {
      font-size: 0.875rem;
      color: #1d252d;
      letter-spacing: 1px;
      text-transform: capitalize;
      width: 7.5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 1.2rem;
    }

    .rating {
      background-color: #1dbf80;
      color: #fff;
      display: flex;
      font-size: 0.75rem;
      gap: 0.35rem;
      align-items: center;
      padding: 0.25rem 0.5rem;
    }
    .rating img {
      height: 0.75rem;
    }
    .address {
      margin: 0.25rem 0 0.5rem;
      color: #506d85;
      text-transform: capitalize;
      width: 11rem;
      box-sizing: border-box;
      height: 1.9rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: wrap;
    }
    .buttons {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .btn-1 {
      color: #fff;
      background-color: #000;
      padding: 0.5rem;
      border-radius: 4px;
      height: 100%;
      cursor: pointer;
    }
    .btn-2 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      width: 2rem;
      border: 1px solid #dde5ed;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  `;

  render() {
    return html`<div class="popup-card">
      <div class="image-wrapper">
        <img src=${this.img} />
      </div>
      <div class="body-wrapper">
        <div class="header-wrapper">
          <h1>${this.spName}</h1>
          <div class="rating">
            <img src=${svg} />
            <p class="rate-value">${this.rating.toFixed(1)}</p>
          </div>
        </div>
        <p class="address">${this.address}</p>
        <div class="buttons">
          <div class="btn-1">Book an Appointment</div>
          <div class="btn-2"><img src=${gallery} /></div>
        </div>
      </div>
    </div>`;
  }
}
