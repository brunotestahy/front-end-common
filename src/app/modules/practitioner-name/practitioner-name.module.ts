import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractitionerNameComponent } from './practitioner-name.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PractitionerNameComponent
  ],
  declarations: [PractitionerNameComponent]
})
export class PractitionerNameModule { }
