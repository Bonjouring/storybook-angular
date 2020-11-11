import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ SelectComponent ],
  exports: [ SelectComponent ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NzSelectModule
  ]
})

export class ButtonModule {}
