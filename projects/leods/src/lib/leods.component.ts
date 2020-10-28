import { Component, Input, OnInit } from '@angular/core';

/**
 * Button
 *
 * - Primary buttons stand out on purpose. They are used to indicate primary actions used within a creation flow or preview window.\n
 * - Secondary buttons
 *
 */
@Component({
  selector: 'lib-leods',
  template: ` <button nz-button nzType="primary">Primary Button</button> `,
  styles: [],
})
export class LeodsComponent implements OnInit {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary: boolean;

  /**
   * What background color to use for test2
   */
  @Input()
  backgroundColor: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label: string;

  constructor() {}

  ngOnInit(): void {}
}
