import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractitionerPhotoChooserComponent } from './practitioner-photo-chooser.component';
import { PractitionerThumbnailModule } from '../practitioner-thumbnail/practitioner-thumbnail.module';
import { ThumbnailService } from './thumbnail.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    PractitionerThumbnailModule,
    HttpModule
  ],
  exports: [
    PractitionerPhotoChooserComponent
  ],
  providers: [
    ThumbnailService
  ],
  declarations: [PractitionerPhotoChooserComponent]
})
export class PractitionerPhotoChooserModule { }
