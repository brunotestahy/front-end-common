import { Injectable, Inject } from '@angular/core';
import {
  FrontEndConfigProvider,
  FrontEndConfig
} from '../configuration/configuration';
import { AbstractService } from '../services/abstract.service';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Patient } from '../patient/patient';
import { Appointment } from './appointment';
import { Observable } from 'rxjs/Rx';
import { SHIFTS } from '../model/shifts';
import * as momentLib from 'moment';
import { Moment } from 'moment';

const moment = (momentLib as any).default
  ? (momentLib as any).default
  : momentLib;

@Injectable()
export class AppointmentService extends AbstractService {
  private config: FrontEndConfig;

  private shiftURL: string;

  constructor(protected http: Http, @Inject(FrontEndConfigProvider) config) {
    super(http);
    this.config = config as FrontEndConfig;
    this.baseURL = config.appointment.baseURL;
    this.shiftURL = config.appointment.shiftURL;
  }

  public getShifts(date: Date, full: boolean, patients?: Array<Patient>) {
    if (date != null) {
      const formattedDate = moment(date).format('YYYY-MM-DD');
      const options = new RequestOptions();
      options.params = new URLSearchParams();
      options.params.set('full', `${full == null ? false : full}`);
      if (patients != null) {
        options.params.set(
          'patients',
          patients.map(patient => patient.id).join(',')
        );
      }
      return super.get(`${this.shiftURL}/${formattedDate}`, options);
    }
  }

  public saveShifts(appointments: Array<Appointment>) {
    return super.post(this.shiftURL, appointments);
  }

  public getAvailableDates(patientId: string) {
    return super.get(`${this.shiftURL}/patient/${patientId}`);
  }

  public getPractitioners(patientId: string, limit: Date) {
    const formattedDate = moment(limit).format('YYYY-MM-DDTHH:mm:ssZ');
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('limit', formattedDate);
    options.params.set('patientId', patientId);
    return super.get(`${this.shiftURL}/practitioners`, options);
  }

  public getShiftByMoment(mo: Moment) {
    const hour = mo.hour();
    if (hour >= 7 && hour < 13) {
      return SHIFTS.DAY;
    } else if (hour >= 13 && hour < 19) {
      return SHIFTS.AFTERNOON;
    } else {
      return SHIFTS.NIGHT;
    }
  }

  public getShiftByAppointment(appointment: Appointment) {
    return this.getShiftByMoment(moment(appointment.period.startDate.dateTime, 'YYYY-MM-DDTHH:mm:ssZ'));
  }

  public getCurrentShift() {
    return this.getShiftByMoment(moment(new Date()));
  }

  public deleteAll(appointments: Array<Appointment>) {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('ids', appointments.map(a => a.id).join(','));
    return super.delete(`${this.shiftURL}`, options);
  }

  public remove(appointment: Appointment) {
    return super.delete(`/${appointment.id}`);
  }
}
