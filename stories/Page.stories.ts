import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from './button.component';
import Header from './header.component';
import Page from './page.component';

import * as HeaderStories from './Header.stories';
import { NgZorroAntdModule } from 'projects/leods/src/lib/nz-zorro.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from 'projects/leods/src/lib/button/button.component';

export default {
  title: 'JA Design System/Components/Page',
  component: Header,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, Header],
      imports: [CommonModule, NgZorroAntdModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<Page> = (args: Page) => ({
  component: Page,
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
