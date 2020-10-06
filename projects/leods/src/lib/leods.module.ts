import { NgModule } from '@angular/core';
import { LeodsComponent } from './leods.component';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzSelectModule } from 'ng-zorro-antd/select';
import { ColorCardComponent } from './colors/color-card/color-card.component';
import { ColorsComponent } from './colors/colors.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from './nz-zorro.module';

@NgModule({
  declarations: [LeodsComponent, ColorCardComponent, ColorsComponent],
  imports: [NgZorroAntdModule, BrowserModule, FormsModule, HttpClientModule],
  exports: [LeodsComponent, NgZorroAntdModule],
})
export class LeodsModule {}
