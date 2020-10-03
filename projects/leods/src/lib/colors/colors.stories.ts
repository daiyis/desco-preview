import { FormsModule } from '@angular/forms';
import { LeodsComponent } from '../leods.component';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorsComponent } from './colors.component';
import { ColorCardComponent } from './color-card/color-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

export default {
  title: 'JA Design System/Components/Colors',
  component: ColorsComponent,
  decorators: [
    moduleMetadata({
      declarations: [ColorsComponent, ColorCardComponent],
      imports: [NzButtonModule, NzSelectModule, BrowserAnimationsModule, BrowserModule, FormsModule, HttpClientModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ColorsComponent> = (args: ColorsComponent) => ({
  component: ColorsComponent,
  props: args,
});

export const Primary = Template.bind({});
