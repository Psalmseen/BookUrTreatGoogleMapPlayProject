import { html } from 'lit';

import './media-query-test';

export default {
  title: 'test/media-query-test',
};

const Template = (args) => html`<media-query-test></media-query-test>`;

export const MediaQueryTest = Template.bind(this);
MediaQueryTest.args = {};
