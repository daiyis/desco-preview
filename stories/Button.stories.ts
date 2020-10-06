// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { withA11y } from '@storybook/addon-a11y';
import Button from './button.component';

export default {
  title: 'JA Design System/Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  component: Button,
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
  label: 'Button',
};
Secondary.parameters = {
  docs: {
    source: {
      code: `<Button [primary]='false'></Button>`,
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
