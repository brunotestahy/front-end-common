import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificationComponent } from './identification.component';
import { PractitionerThumbnailModule } from '../practitioner-thumbnail/practitioner-thumbnail.module';

@NgModule({
  imports: [
    CommonModule,
    PractitionerThumbnailModule
  ],
  exports: [
    IdentificationComponent
  ],
  declarations: [IdentificationComponent]
})
export class IdentificationModule { }
