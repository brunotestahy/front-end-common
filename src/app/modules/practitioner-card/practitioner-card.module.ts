import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { PractitionerThumbnailModule } from '../practitioner-thumbnail/practitioner-thumbnail.module';
import { PractitionerCardComponent } from './practitioner-card.component';
import { RegionalCouncilModule } from '../regional-council/regional-council.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    PractitionerThumbnailModule,
    RegionalCouncilModule
  ],
  exports: [
    PractitionerCardComponent
  ],
  declarations: [PractitionerCardComponent]
})
export class PractitionerCardModule { }
