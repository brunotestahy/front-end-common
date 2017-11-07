import { Component, OnInit } from '@angular/core';
import { Practitioner } from '../../modules/practitioner/practitioner';

@Component({
  selector: 'smart-practitioner-thumbnail-page',
  templateUrl: './practitioner-thumbnail-page.component.html',
  styleUrls: ['./practitioner-thumbnail-page.component.css']
})
export class PractitionerThumbnailPageComponent implements OnInit {

  practitioner: Practitioner = {
    photo: 'https://www.portalaz.com.br/images/316328/2017%2F06%2F06%2F4ad031ac-f0ce-433a-805f-bcf3140ee1d8%2Ffile'
  };

  noPhotoPractitioner: Practitioner = {
    givenName: ['Frederico'],
    familyName: ['Gomes', 'Sá']
  };

  practitioners: Array<Practitioner> = [
    { photo: 'https://www.portalaz.com.br/images/316328/2017%2F06%2F06%2F4ad031ac-f0ce-433a-805f-bcf3140ee1d8%2Ffile' },
    { photo: 'http://www.crechebebeaba.com.br/wp-content/uploads/2016/05/O6T8LS0.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
