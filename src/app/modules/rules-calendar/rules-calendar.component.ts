import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { RulesCalendarService } from './rules-calendar.service';

@Component({
  selector: 'smart-rules-calendar',
  templateUrl: './rules-calendar.component.html',
  styleUrls: ['./rules-calendar.component.css']
})
export class RulesCalendarComponent implements OnInit {

  @Output() rulesCalendarDate: EventEmitter<Date> = new EventEmitter<Date>();
  @Input() dateFocus: Date;

  todayDate = new Date();
  dateShifted: boolean;
  rulesCalendar;
  showFullCalendar = false;

  constructor(private rulesCalendarService: RulesCalendarService) { }

  ngOnInit() {
    if (this.dateFocus) {
      this.dateFocus = new Date(this.dateFocus);
      this.isDateShifted(this.dateFocus);
    } else {
      this.dateFocus = this.todayDate;
      this.isDateShifted(this.dateFocus);
    }
    this.loadPlan(this.dateShifted, this.dateFocus);
  }

  loadPlan(dateShifted: boolean, dateFocus: Date) {
    this.rulesCalendarDate.emit(dateFocus);
    this.rulesCalendar = this.rulesCalendarService.getRulesCalendar(dateShifted, dateFocus);
    this.rulesCalendar.forEach(calendar => {
        if (calendar.totalTasks !== 0) {
          calendar.plan = 'with-plan';
          calendar.percent = Math.round(calendar.completedTasks / calendar.totalTasks * 100);
        } else {
          calendar.plan = 'without-plan';
        }
    });
  }

  changeDate(rc) {
    this.dateFocus = rc.date;
    this.isDateShifted(this.dateFocus);
    this.loadPlan(this.dateShifted, this.dateFocus);
  }

  dateup() {
    this.dateFocus = new Date(this.dateFocus.getTime() + 24 * 60 * 60 * 1000);
    this.isDateShifted(this.dateFocus);
    this.loadPlan( this.dateShifted, this.dateFocus);
  }

  datedown() {
    this.dateFocus = new Date(this.dateFocus.getTime() - 24 * 60 * 60 * 1000);
    this.isDateShifted(this.dateFocus);
    this.loadPlan( this.dateShifted, this.dateFocus);
  }


  isDateShifted(date: Date) {
    if (this.isSameDate(date, new Date())) {
      this.dateShifted =  false;
    } else {
      this.dateShifted =  true;
    }
  }

  isSameDate(date1: Date, date2: Date) {
    return (date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear());
  }

}
