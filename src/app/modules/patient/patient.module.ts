import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from './patient.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PatientService
  ]
})
export class PatientModule { }
