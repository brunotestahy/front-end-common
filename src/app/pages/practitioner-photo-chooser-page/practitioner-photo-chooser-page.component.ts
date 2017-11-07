import { Component, OnInit } from '@angular/core';
import { Practitioner } from '../../modules/practitioner/practitioner';

@Component({
  selector: 'smart-practitioner-photo-chooser-page',
  templateUrl: './practitioner-photo-chooser-page.component.html',
  styleUrls: ['./practitioner-photo-chooser-page.component.css']
})
export class PractitionerPhotoChooserPageComponent implements OnInit {

  practitioner: Practitioner = {};

  constructor() { }

  ngOnInit() {
  }

  onError(){
    console.log("Error uploading photo for thumbnail");
  }

  onSuccess(){
    console.log('Photo thumbnail uploaded successfully');
  }

}
