import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificationComponent } from './identification.component';
import { PractitionerThumbnailModule } from '../practitioner-thumbnail/practitioner-thumbnail.module';
import { PatientService } from '../patient/patient.service';
import { AppointmentService } from '../appointment/appointment.service';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    PractitionerThumbnailModule,
    LoginModule
  ],
  exports: [
    IdentificationComponent
  ],
  declarations: [IdentificationComponent],
  providers: [PatientService, AppointmentService]
})
export class IdentificationModule { }
