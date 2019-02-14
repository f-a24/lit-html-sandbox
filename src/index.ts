import { html, render } from 'lit-html';

const myTemplate = (name: string) => html`<p>Hello ${name}</p>`;

render(myTemplate('World'), document.body);