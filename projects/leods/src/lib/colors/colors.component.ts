import { Component, Input, OnInit } from '@angular/core';
import { colors, Color } from './colors';

@Component({
  selector: 'lib-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent implements OnInit {
  @Input() colors: Color[];

  constructor() {}

  ngOnInit(): void {
    this.colors = colors.map((x) => {
      const c = x.split(':');
      return {
        name: c[0],
        value: c[1],
      };
    });
  }
}
