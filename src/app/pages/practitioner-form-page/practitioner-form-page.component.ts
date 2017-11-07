import { Component, OnInit } from '@angular/core';
import { Practitioner } from '../../modules/practitioner/practitioner';

@Component({
  selector: 'smart-practitioner-form-page',
  templateUrl: './practitioner-form-page.component.html',
  styleUrls: ['./practitioner-form-page.component.css']
})
export class PractitionerFormPageComponent implements OnInit {

  practitioner: Practitioner = {};

  opened: boolean;

  constructor() { }

  ngOnInit() {
    this.opened = false;
  }

  openDialog() {
    this.opened = true;
  }

  onOverlayClick() {
    this.opened = false;
  }

  onPractitionerSaved(savedPractitioner: Practitioner) {
    console.log(JSON.stringify(savedPractitioner));
    this.opened = false;
  }

}
