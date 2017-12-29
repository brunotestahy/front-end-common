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
  @Input() emptyNurseMessage: string;
  @Input() emptyAllMessage: string;
  @Input() evaluationMessage: string;
  @Output() open = new EventEmitter<void>();
  @Output() evaluationClick = new EventEmitter<void>();

  opened: boolean;
  practitioners: Map<String, Practitioner>;
  shiftInfo: string;
  currentDay: string;
  nurses;
  nursesValid: Array<Practitioner>;
  currentShift: number;
  appointments: Array<Appointment>;
  validAppointment: Appointment;
  haveAppointments: boolean;
  emptyPractitioners: boolean;
  emptyNurses: boolean;

  constructor(private patientService: PatientService,
              private appointmentService: AppointmentService,
              private loginService: LoginService) {

  }

  ngOnInit() {
    this.nurses = {};
    this.opened = false;
    this.haveAppointments = false;
    this.emptyNurses = false;
    this.emptyPractitioners = false;
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
    this.getNurses();
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

  getKeys(professional) {
    if (professional != null) {
      return Object.keys(professional);
    }
  }

  getCareProviders() {
    if (this.patient != null) {
      this.patientService.getCareProviders(this.patient.id)
        .subscribe(careProviders => {
          this.practitioners = careProviders;
          if (this.getKeys(this.practitioners) == null || this.getKeys(this.practitioners).length === 0) {
            this.emptyPractitioners = true;
          } else {
            this.emptyPractitioners = false;
          }
        });
    }
  }

  getNurses() {
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
          this.nurses = {};
          this.appointments = appointments.dtoList;
          this.validAppointment = this.appointments.find(appointment => {
            const aShift = this.appointmentService.getShiftByAppointment(appointment);
            return this.currentShift === aShift;
          });
          if (this.validAppointment) {
            this.nursesValid = this.validAppointment.practitioners;
            this.nursesValid.map( nurse => {
              this.nurses[this.inverseRoles(nurse.practitionerRoles[0])] = nurse;
            });
          }
          if (this.getKeys(this.nurses) == null || this.getKeys(this.nurses).length === 0) {
            this.emptyNurses = true;
          } else {
            this.emptyNurses = false;
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
    if (this.getKeys(this.practitioners) == null || this.getKeys(this.practitioners).length === 0) {
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
