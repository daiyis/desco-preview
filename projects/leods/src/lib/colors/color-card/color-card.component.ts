import { Color } from './../colors';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css'],
})
export class ColorCardComponent implements OnInit {
  @Input() color: Color;

  constructor() {}

  ngOnInit(): void {}
}
