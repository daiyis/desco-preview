import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * To trigger an operation.
 *
 * - Primary buttons stand out on purpose. They are used to indicate primary actions used within a creation flow or preview window.
 * - Secondary buttons acts as a companion to the primary button or as a stand alone action that is not the main focus on the screen.
 * - Ghost buttons should be used for actions that are not classified as primary or secondary but needs to be there to provide some context or as a cancellation action.
 * - Destructive buttons are primarily used on destructive actions such as deleting a record. The Red colour is use to indicate the severity of the action.
 */
@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
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

  /**
   * Optional click handler
   */
  @Output() onClick = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  click(event) {
    this.onClick.emit(event);
  }
}
