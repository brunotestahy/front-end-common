import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { OptionComponent } from './option/option.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SelectComponent, OptionComponent
  ],
  declarations: [SelectComponent, OptionComponent]
})
export class SelectModule { }
