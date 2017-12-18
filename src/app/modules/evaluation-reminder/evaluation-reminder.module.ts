import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationReminderComponent } from './evaluation-reminder.component';
import { DialogModule } from '../dialog/dialog.module';
import { PractitionerThumbnailModule } from '../practitioner-thumbnail/practitioner-thumbnail.module';
import { PractitionerCardModule } from '../practitioner-card/practitioner-card.module';
import { LoginModule } from '../login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    PractitionerCardModule,
    PractitionerThumbnailModule,
    LoginModule,
    NgbModule
  ],
  exports: [EvaluationReminderComponent],
  declarations: [EvaluationReminderComponent]
})
export class EvaluationReminderModule {}
