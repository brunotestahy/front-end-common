import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractitionerFormComponent } from './practitioner-form.component';
import { DialogModule } from '../dialog/dialog.module';
import { PractitionerPhotoChooserModule } from '../practitioner-photo-chooser/practitioner-photo-chooser.module';
import { CpfModule } from '../cpf/cpf.module';
import { FormsModule} from '@angular/forms';
import { PractitionerModule } from '../practitioner/practitioner.module';
import { TestEmptyModule } from '../test-empty/test-empty.module';
import { LoadingModule } from '../loading/loading.module';
import { CalendarModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    PractitionerPhotoChooserModule,
    CpfModule,
    FormsModule,
    PractitionerModule,
    TestEmptyModule,
    LoadingModule,
    CalendarModule
  ],
  exports: [
    PractitionerFormComponent
  ],
  declarations: [PractitionerFormComponent]
})
export class PractitionerFormModule { }
