import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { PractitionerThumbnailModule } from '../practitioner-thumbnail/practitioner-thumbnail.module';
import { PractitionerCardComponent } from './practitioner-card.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PractitionerThumbnailModule
  ],
  exports: [
    PractitionerCardComponent
  ],
  declarations: [PractitionerCardComponent]
})
export class PractitionerCardModule { }
