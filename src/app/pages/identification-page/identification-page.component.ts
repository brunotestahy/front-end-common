import { Component, OnInit } from '@angular/core';
import { Practitioner } from '../../modules/practitioner/practitioner';

@Component({
  selector: 'smart-identification-page',
  templateUrl: './identification-page.component.html',
  styleUrls: ['./identification-page.component.css']
})
export class IdentificationPageComponent implements OnInit {

  patient: any;

  constructor() { }

  ngOnInit() {
    this.patient = {};
    this.patient.id = 29193;
  }

  log(val: any) {
    console.log(val);

  }

  onEvaluationClick() {
    console.log('vai para a pagina de avaliação');
  }

}
