import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PatientService } from '../patient/patient.service';
import { Practitioner } from '../practitioner/practitioner';
import { AppointmentService } from '../appointment/appointment.service';
import { ROLES } from '../model/role-codes';
import { Patient } from '../patient/patient';
import { LoginService } from '../login/login.service';
import { Appointment } from '../appointment/appointment';

@Component({
  selector: 'smart-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  @Input() patient: Patient; // verificar se há alguma interface
  @Input() turnInfo: string;
  @Input() width: string;
  @Input() height: string;
  @Input() menuHeader: string;
  @Input() menuTransform: string;
  @Input() emptyPractitionersMessage: string;
  @Input() evaluationMessage: string;
  @Output() open = new EventEmitter<void>();
  @Output() evaluationClick = new EventEmitter<void>();

  opened: boolean;
  practitioners: Map<String, Practitioner>;
  shiftInfo: string;
  currentDay: string;
  nursers: Array<Practitioner>;
  currentShift: number;
  appointments: Array<Appointment>;
  validAppointment: Appointment;
  haveAppointments: boolean;

  constructor(private patientService: PatientService,
              private appointmentService: AppointmentService,
              private loginService: LoginService) {

  }

  ngOnInit() {
    this.opened = false;
    this.haveAppointments = false;
    this.getPatient();
    this.loadAll();

  }

  getPatient() {
    if (!this.patient) {
      this.loginService.getMeSubject().subscribe( me => {
        if (me != null) {
          this.patient = me.dto as Patient;
        }
      });
    }
  }

  loadAll() {
    this.currentShift = this.appointmentService.getCurrentShift();
    this.getCareProviders();
    this.getCurrentShift(this.currentShift);
    this.getCurrentDay();
  }

  getCurrentShift(shift) {
    if (shift === 1) {
      this.shiftInfo = '07:00 às 13:00';
    } else if (shift === 2) {
      this.shiftInfo = '13:00 às 19:00';
    } else {
      this.shiftInfo = '19:00 às 07:00';
    }
  }

  getCurrentDay() {
    const today = new Date();
    this.currentDay = `${('0' + today.getDate()).slice(-2)}/${today.getMonth() + 1}`;
  }

  onShow() {
    if (!this.opened) {
      this.open.emit();
      this.opened = true;
      this.loadAll();
    } else {
      this.opened = false;
    }
  }

  close() {
    this.opened = false;
  }

  getKeys() {
    if (this.practitioners != null) {
      return Object.keys(this.practitioners);
    }
  }

  getCareProviders() {
    if (this.patient != null) {
      this.patientService.getCareProviders(this.patient.id)
        .subscribe(careProviders => {
          this.practitioners = careProviders;
          this.getNursers();
        });
    }
  }

  getNursers() {
    if (this.patient) {
      this.appointmentService.getAvailableDates(this.patient.id)
        .subscribe(appointmentDays => {
          const found = appointmentDays.find( (appDay) => {
            let correctDate = appDay.split('[');
            correctDate = new Date(correctDate[0]);
            const rightNow = new Date();
            return rightNow >= correctDate;
          });
          if (found) {
            this.haveAppointments = true;
          } else {
            this.haveAppointments = false;
          }
        });
      this.appointmentService.getShifts(new Date(), true, [this.patient])
        .subscribe(appointments => {
          this.appointments = appointments.dtoList;
          this.validAppointment = this.appointments.find(appointment => {
            const aShift = this.appointmentService.getShiftByAppointment(appointment);
            return this.currentShift === aShift;
          });
          if (this.validAppointment) {
            this.nursers = this.validAppointment.practitioners;
            this.nursers.map( nurse => {
              this.practitioners[this.inverseRoles(nurse.practitionerRoles[0])] = nurse;
            });
          }
        });
    }
  }

  inverseRoles(code: string) {
    return Object.keys(ROLES).find(roleKey => ROLES[roleKey] === code);
  }

  getCareProviderType(type: string) {
    if (type === 'assistant') {
      return 'Médico assistente';
    } else if (type === 'associated') {
      return 'Médico associado';
    } else if (type === 'NURSE') {
      return 'Enfermeiro';
    } else if (type === 'NURSE_TECH') {
      return 'Técnico de Enfermagem';
    }
  }

  getCalculatedHeight() {
    if (this.getKeys() == null || this.getKeys().length === 0) {
      if (this.haveAppointments) {
        return '195px';
      } else {
        return '150px';
      }
    }
    return (this.height == null || this.height.trim().length === 0) ? null : this.height;
  }

  onEvaluationClick() {
    this.evaluationClick.emit();
  }
}
