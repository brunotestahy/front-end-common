import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-evaluation-reminder-page',
  templateUrl: './evaluation-reminder-page.component.html',
  styleUrls: ['./evaluation-reminder-page.component.css']
})
export class EvaluationReminderPageComponent implements OnInit {

  reminderOpen: boolean;

  patient = {
    name: 'Fábio Augusto'
  };

  constructor() {
  }

  ngOnInit() {
    this.reminderOpen = false;
  }

  openDialog() {
    this.reminderOpen = !this.reminderOpen;
  }

  onOverlayClick() {
    this.reminderOpen = false;
  }

  onButtonClick() {
    console.log('cliquei no botão');
  }

}
