import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  /**
   * 下拉框内容
   */
  @Input()
  itemList: [];

  /**
   * 下拉框尺寸
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * 下拉框标签
   */
  @Input()
  label: string;

  curItem;

  constructor() { }

  setClass(): string {
    return `storybook-select--${this.size}`;
  }

}
