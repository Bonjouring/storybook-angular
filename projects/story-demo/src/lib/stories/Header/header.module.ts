import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ButtonModule } from '../Button/button.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})

export class HeaderModule {}
