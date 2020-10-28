import { NgZorroAntdModule } from '../nz-zorro.module';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button.component';

export default {
  title: 'JA Design System/Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [NgZorroAntdModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  docs: {
    source: {
      code: `<Button [primary]='true'></Button>`,
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'large',
  label: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  size: 'small',
  label: 'Button',
};
