import { Component, OnInit } from '@angular/core';
import { Practitioner } from '../../modules/practitioner/practitioner';

@Component({
  selector: 'smart-identification-page',
  templateUrl: './identification-page.component.html',
  styleUrls: ['./identification-page.component.css']
})
export class IdentificationPageComponent implements OnInit {

  practitioners: any;
  emptyPractitioners: any;

  constructor() { }

  ngOnInit() {
    this.practitioners = {
      'assistant':
      {
        practitionerRoles: ['Médico Assitente'],
        givenName: ['Frederico'],
        familyName: ['Gomes', 'Sá'],
        fullName: 'Frederico Gomes Sá',
        photo: 'https://www.portalaz.com.br/images/316328/2017%2F06%2F06%2F4ad031ac-f0ce-433a-805f-bcf3140ee1d8%2Ffile'
      },
      'associated':
      {
        practitionerRoles: ['Enfermeira'],
        givenName: ['Fernanda'],
        familyName: ['Lúcia', 'Araújo'],
        fullName: 'Fernanda Lúcia Araújo',
        photo: 'http://www.crechebebeaba.com.br/wp-content/uploads/2016/05/O6T8LS0.jpg'
      }
    };

    this.emptyPractitioners = {};
  }

  log(val: any) {
    console.log(val);
  }

}
