import { Component, OnInit } from '@angular/core';
import { Practitioner } from '../../modules/practitioner/practitioner';

@Component({
  selector: 'smart-practitioner-card-page',
  templateUrl: './practitioner-card-page.component.html',
  styleUrls: ['./practitioner-card-page.component.css']
})
export class PractitionerCardPageComponent implements OnInit {

  prac: Practitioner = {
    photo: 'https://www.portalaz.com.br/images/316328/2017%2F06%2F06%2F4ad031ac-f0ce-433a-805f-bcf3140ee1d8%2Ffile',
    fullName: 'Francisco Nuno Maia Filho',
    crm: '25.9876',
    crmUF: 'RJ',
    practitionerRoles: ['Médico', 'Diretor']
  };

  practitioners: Array<Practitioner> = [
    {
      photo: 'https://www.portalaz.com.br/images/316328/2017%2F06%2F06%2F4ad031ac-f0ce-433a-805f-bcf3140ee1d8%2Ffile',
      fullName: 'Francisco Nuno Maia Filho',
      crm: '25.9876',
      crmUF: 'RJ',
      practitionerRoles: ['Médico', 'Diretor']
    },
    {
      photo: 'http://www.crechebebeaba.com.br/wp-content/uploads/2016/05/O6T8LS0.jpg',
      fullName: 'Francisco Nuno Maia Filho',
      crm: '25.9876',
      crmUF: 'RJ',
      practitionerRoles: ['Médico']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
