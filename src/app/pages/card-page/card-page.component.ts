import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  logCardClick() {
    console.log('Card clicked');
  }

}
