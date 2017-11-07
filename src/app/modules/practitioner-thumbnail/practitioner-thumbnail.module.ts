import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractitionerThumbnailComponent } from './practitioner-thumbnail.component';
import { Practitioner } from '../practitioner/practitioner';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PractitionerThumbnailComponent
  ],
  declarations: [PractitionerThumbnailComponent]
})
export class PractitionerThumbnailModule {

  @Input() practitioner: Practitioner;

}
