import { NzButtonComponent } from 'ng-zorro-antd/button';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'JA Design System/Components/Button',
  component: NzButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [NzButtonComponent],
      imports: [BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NzButtonComponent> = (args: NzButtonComponent) => ({
  component: NzButtonComponent,
  props: args,
  template: '<button nz-button nzType="primary">Primary Button 1</button>',
});

export const Primary = () => ({
  component: NzButtonComponent,
  template: '<button nz-button nzType="primary">Primary Button</button>',
  parameters: {
    docs: {
      source: {
        code: `<button nz-button nzType="primary">Primary Button</button>`,
      },
    },
  },
});

export const Default = () => ({
  component: NzButtonComponent,
  template: '<button nz-button nzType="default">Default Button</button>',
  parameters: {
    docs: {
      source: {
        code: `<button nz-button nzType="primary">Primary Button</button>`,
      },
    },
  },
});

export const Groups = () => ({
  component: NzButtonComponent,
  template: allButtonsTemplate,
  styles: [
    `
      div, button {
        margin: 6px;
      }
    `,
  ],
});

const allButtonsTemplate = `
<div>
  <button nz-button nzType="primary">Primary Button</button>
  <button nz-button nzType="primary">Button<i nz-icon nzType="down"></i></button>
  <button nz-button nzType="primary"><i nz-icon nzType="plus"></i>Button</button>
  <button nz-button nzType="primary" disabled="true">Primary Button</button>
</div>
<div>
  <button nz-button nzType="default">Default Button</button>
  <button nz-button nzType="default">Default Button<i nz-icon nzType="down"></i></button>
  <button nz-button nzType="default"><i nz-icon nzType="plus"></i>Default Button</button>
  <button nz-button nzType="default" disabled="true">Default Button</button>
</div>
<div>
  <button nz-button nzType="text">Text Button</button>
  <button nz-button nzType="text">Text Button<i nz-icon nzType="down"></i></button>
  <button nz-button nzType="text"><i nz-icon nzType="plus"></i>Text Button</button>
  <button nz-button nzType="text" disabled="true">Text Button</button>
</div>
<div>
  <a nz-button nzType="link">Link Button</a>
  <a nz-button nzType="link">Link Button<i nz-icon nzType="down"></i></a>
  <a nz-button nzType="link"><i nz-icon nzType="plus"></i>Link Button</a>
</div>
<div>
  <button nz-button nzType="primary" nzDanger="true">Destructive Button</button>
  <button nz-button nzType="primary" nzDanger="true">Destructive Button</button>
  <button nz-button nzType="primary" disabled="true">Destructive Button</button>
  <button nz-button nzType="text" nzDanger="true">Text Button</button>
</div>
<div>
  <button nz-button nzType="default"><i nz-icon nzType="search"></i></button>
</div>
`;
