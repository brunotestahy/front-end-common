import { Component, OnInit } from '@angular/core';
import {Patient} from '../../modules/patient/patient';

@Component({
  selector: 'smart-greeting-page',
  templateUrl: './greeting-page.component.html',
  styleUrls: ['./greeting-page.component.css']
})
export class GreetingPageComponent implements OnInit {

  patient: Patient;

  constructor() { }

  ngOnInit() {
    this.patient = {
      givenName: ['Felipe']
    };
  }

}
