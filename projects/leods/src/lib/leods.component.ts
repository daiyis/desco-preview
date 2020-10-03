import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-leods',
  template: `
    <p>
      leods works!
    </p>
    <button nz-button nzType="primary">Primary Button</button>
    <nz-select ngModel="lucy" nzAllowClear nzPlaceHolder="Choose">
      <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
    </nz-select>
  `,
  styles: [],
})
export class LeodsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
