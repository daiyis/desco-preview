import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Header from './header.component';
import { NgZorroAntdModule } from 'projects/leods/src/lib/nz-zorro.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from 'projects/leods/src/lib/button/button.component';

export default {
  title: 'JA Design System/Components/Header',
  component: Header,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, NgZorroAntdModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<Header> = (args: Header) => ({
  component: Header,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
