import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-rules-calendar-page',
  templateUrl: './rules-calendar-page.component.html',
  styleUrls: ['./rules-calendar-page.component.css']
})
export class RulesCalendarPageComponent implements OnInit {

  selectedDate: Date;

  constructor() { }

  ngOnInit() {
    this.selectedDate = new Date();
  }

}
