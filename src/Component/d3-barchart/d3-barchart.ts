import { html, LitElement, CSSResultGroup } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import * as d3 from 'd3';
import { select } from 'd3-selection';

import { d3BarchartStyles } from './d3-barchart.styles';

@customElement('d3-barchart')
export class D3Barchart extends LitElement {
  firstUpdated(): void {
    this.useD3(this.appointments);
  }
  static styles: CSSResultGroup = d3BarchartStyles;

  @property({ type: Number }) timesClicked = 0;
  @query('svg') svg!: SVGElement;
  @property({ type: Array }) appointments = Array(7)
    .fill('')
    .map((_, i) => {
      const numberSuccessful = Math.ceil(Math.random() * 10);
      const dateArray = [
        'Sun 1',
        'Mon 2',
        'Tue 3',
        'Wed 4',
        'Thur 5',
        'Fri 6',
        'Sat 7',
      ];
      return {
        success: numberSuccessful,
        fail: 10 - numberSuccessful,
        date: dateArray[i],
      };
    });
  @property({ type: Number }) svgHeight = 300;
  @property({ type: Number }) svgwidth = 500;

  render() {
    return html`<div class="barchart">
      <h2 class="heading">Upcoming Appointments</h2>
      <p class="heading__text">All locations, next 7 days</p>
      <h2 class="booked">324 booked</h2>
      <div class="appointment">
        <p class="appointment__detail">
          Confirmed appointments <span>314</span>
        </p>
        <p class="appointment__status">Confirmed</p>
      </div>
      <div class="appointment">
        <p class="appointment__detail">
          Cancelled appointments <span> 10 </span>
        </p>
        <p class="appointment__status">Cancelled</p>
      </div>
      <svg></svg>
    </div>`;
  }

  useD3(appointments) {
    const svg = select(this.svg);
    const svgHeight = this.svgHeight;
    const svgWidth = this.svgwidth;

    svg
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .attr('viewBox', `0 0 ${svgWidth + 50} ${svgHeight + 50}`);

    const g = svg.append('g');
    const ittrable = [0, 1, 2, 3, 4, 5];
    const line = g
      .selectAll('line')
      .data(ittrable)
      .enter()
      .append('line')
      .attr('x1', 0)
      .attr('x2', svgWidth)
      .attr('y1', 0)
      .attr('y2', 0)
      .attr('stroke', '#222')
      .attr('transform', (d) => `translate(50, ${(d * svgHeight) / 5 + 10})`);

    g.selectAll('text')
      .data(ittrable)
      .enter()
      .append('text')
      .text((d) => d * 20)
      .attr('transform', (d) => {
        const xTranslate = d * 20 === 100 ? 20 : d * 20 > 9 && d < 99 ? 30 : 40;
        const yTranslate = svgHeight - (d * svgHeight) / 5 + 20;
        console.log(d, xTranslate);
        return `translate(${xTranslate}, ${yTranslate})`;
      });

    g.selectAll('p')
      .data(appointments)
      .enter()
      .append('text')
      .text(({ date }: { date: string }) => date)
      .attr('y', svgHeight + 50)
      .attr('x', (_, i) => 60 + i * 65)
      .attr('fill', '#1d252d')
      .attr(
        'transform',
        (_, i) => `rotate(-45, ${60 + i * 65}, ${svgHeight + 50})`
      );
    this.renderBarchart(appointments);
  }

  renderBarchart(appointments) {
    const svgHeight = this.svgHeight;

    const heightScale = d3.scaleLinear().domain([0, 10]).range([0, svgHeight]);
    const svg = select(this.svg);
    const higherRect = svg
      .selectAll('rect')
      .data(appointments)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 70 + i * 65)
      .attr('y', ({ success, fail }) =>
        success > fail
          ? svgHeight - heightScale(success)
          : svgHeight - heightScale(fail)
      )
      .attr('height', ({ success, fail }) =>
        success > fail ? heightScale(success) : heightScale(fail)
      )
      .attr('width', 16)
      .attr('fill', ({ success, fail }) =>
        success > fail ? '#26d07c' : '#cc0c2f'
      )
      .attr('transform', `translate(0, 10)`);
    const lowerRect = svg
      .selectAll('p')
      .data(appointments)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 70 + i * 65)
      .attr('y', ({ success, fail }) =>
        success > fail
          ? svgHeight - heightScale(fail)
          : svgHeight - heightScale(success)
      )
      .attr('height', ({ success, fail }) =>
        success > fail ? heightScale(fail) : heightScale(success)
      )
      .attr('width', 16)
      .attr('fill', ({ success, fail }) =>
        success > fail ? '#cc0c2f' : '#26d07c'
      )
      .attr('transform', `translate(0, 10)`);
  }
}

// ///////////////////////////////////////////////////

// !!               ROUGH WORK

//////////////////////////////////////////////////////

// useD3(dataset: Number[]) {
//  ??   CREATE AN SVG ELEMENT
//     const svg = select(this.shadowRoot)
//       .select('#svg')
//       .append('svg')
//       .style('border', '1px solid red')
//       .style('background', '#ddd')
//       .attr('width', 300)
//       .attr('height', 500);
// ?? CREATE A LINEAR SCALE TO SCALE UR ELEMENT
//     const yScale = scaleLinear()
//       .domain([0, d3.max(dataset)])
//       .range([0, 500]);
//     const xScale = scaleLinear()
//       .domain([0, d3.max(dataset)])
//       .range([0, 300]);
//     ??  CREATE A RECTANGLE IN UR SVG
//   ! FIRST METHOS
//   const rect = svg
//      .selectAll('rect')
//      .data(dataset)
//      .enter()
//      .append('rect')
//      .attr('y', (d) => 500 - yScale(d))
//      .attr('x', (d, i) => i * 30 + 5)
//      .attr('height', (d) => yScale(d))
//      .attr('width', 25)
//      .style('fill', 'green');

//      ?? USE DATA TO SKETCH RECT

//     rect
//       .enter()
//       .append('rect')
//       .attr('y', (d) => 500 - yScale(d))
//       .attr('x', (d, i) => i * 30 + 5)
//       .attr('height', (d) => yScale(d))
//       .attr('width', 25)
//       .style('fill', 'green');
//     rect.exit().remove();

// ?? CREATE TEXT ON THE RECTS
// const text = svg
//   .selectAll('text')
//   .data(dataset)
//   .enter()
//   .append('text')
//   .text((d) => d)
//   .attr('y', (d) => 500 - yScale(d) - 2)
//   .attr('x', (d, i) => i * 30 + 5)
//   .style('fill', 'red');

//   ?? creating axes
//     const yAxisScale = d3
//       .scaleLinear()
//       .domain([0, d3.max(dataset)])
//       .range([500, 0]);
//     const x_axis = d3.axisBottom(xScale);
//     const y_axis = d3.axisLeft(yAxisScale);
//     svg.append('g').attr('transform', 'translate(30 , 0)').call(y_axis);
//     svg.append('g').attr('transform', 'translate(0, 480)').call(x_axis);
//   }
