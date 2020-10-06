import { NgZorroAntdModule } from './../nz-zorro.module';
import { LeodsComponent } from './../leods.component';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'JA Design System/Components/Leods',
  component: LeodsComponent,
  decorators: [
    moduleMetadata({
      declarations: [LeodsComponent],
      imports: [NgZorroAntdModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LeodsComponent> = (args: LeodsComponent) => ({
  component: LeodsComponent,
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
