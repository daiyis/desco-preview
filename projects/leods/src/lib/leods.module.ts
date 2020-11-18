import { NgModule } from '@angular/core';
import { LeodsComponent } from './leods.component';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzSelectModule } from 'ng-zorro-antd/select';
import { ColorCardComponent } from './colors/color-card/color-card.component';
import { ColorsComponent } from './colors/colors.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from './nz-zorro.module';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [LeodsComponent, ColorCardComponent, ColorsComponent, ButtonComponent, InputComponent],
  imports: [NgZorroAntdModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [LeodsComponent, NgZorroAntdModule],
})
export class LeodsModule {}
