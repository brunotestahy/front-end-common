import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Practitioner } from '../../modules/practitioner/practitioner';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../login/login.service';
import { Patient } from '../patient/patient';
import { AppointmentService } from '../appointment/appointment.service';

@Component({
  selector: 'smart-evaluation-reminder',
  templateUrl: './evaluation-reminder.component.html',
  styleUrls: ['./evaluation-reminder.component.css'],
  providers: [NgbRatingConfig]
})
export class EvaluationReminderComponent implements OnInit {

  opened: boolean;
  patient: Patient;

  @Output() buttonClick = new EventEmitter<void>();

  @Input() headerText;
  @Input() reasonText;
  @Input() buttonText;
  @Input() asteriskTopText;
  @Input() asteriskBottomText;
  @Input() greetingText;

  practitioners: Array<Practitioner> = [
    {
      fullName: 'Enfermeiro 1',
    },
    {
      fullName: 'Enfermeiro 2',
    }
  ];

  constructor(private config: NgbRatingConfig, private loginService: LoginService, private appointmentService: AppointmentService) {
    config.max = 5;
    config.readonly = true;

    this.loginService.getMeSubject().subscribe(me => {
      if (me != null && this.loginService.isPatient()) {
        const date = new Date();
        const formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        this.patient = me.dto as Patient;
        const lastShown = localStorage.getItem('evaluation_reminder_date');
        if ((lastShown == null || lastShown < formattedDate) && date.getHours() > 9 && date.getHours() < 21 ) {
          localStorage.setItem('evaluation_reminder_date', formattedDate);
          this.appointmentService.getAvailableDates(this.patient.id)
          .subscribe(appointmentDays => {
            const found = appointmentDays.find( (appDay) => {
              let correctDate = appDay.split('[');
              correctDate = new Date(correctDate[0]);
              const rightNow = new Date();
              return rightNow >= correctDate;
            });
            if (found) {
              this.opened = true;
            }
          });
        }
      }
    });
  }

  ngOnInit() {
    this.opened = false;
  }

  onOverlayClick() {
    this.opened = false;
  }

  onButtonClick() {
    this.opened = false;
    this.buttonClick.emit();
  }

}
