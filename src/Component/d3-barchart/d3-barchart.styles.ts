import { css } from 'lit';

export const d3BarchartStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .barchart {
    width: 36.25rem;
    border-radius: 0.5rem;
    border: 1px solid #dde5ed;
    padding: 1.5rem;
    font-family: Avenir;
    color: #1d252d;
    font-size: 14px;
  }
  .heading,
  .booked {
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 1.38;
    margin-bottom: 0.5rem;
  }
  .heading__text {
    color: #506d85;
  }
  .booked {
    margin-top: 1rem;
  }
  .appointment {
    display: flex;
    justify-content: space-between;
  }
  .appointment:last-of-type {
    margin-bottom: 2.5rem;
  }
  .appointment__detail span {
    font-weight: 900;
  }
  .appointment__status {
    font-size: 12px;
  }
  .appointment__status::after {
    content: '';
    width: 0.5rem;
    height: 0.25rem;
    background-color: #26d07c;
    display: inline-block;
    margin-left: 0.5rem;
  }
  .appointment:nth-of-type(2) .appointment__status::after {
    background-color: #cc0c2f;
  }
  svg {
    display: block;
    margin-left: auto;
  }
`;
