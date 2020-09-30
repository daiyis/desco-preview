import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-figma',
  template: `<iframe
    height="500"
    width="800"
    src="https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/P2MRmRHrWHEZL9Cfd9X7Nk/JobAdder-Scales-Design-Library-V0.1?node-id=99%3A0"
    title="W3Schools Free Online Web Tutorials"
    allowfullscreen
  ></iframe>`,
  // styleUrls: ['./header.css'],
})
export default class FigmaComponent {}
