import { Component, OnInit, Input } from '@angular/core';
import { Practitioner } from '../practitioner/practitioner';

@Component({
  selector: 'smart-practitioner-card',
  templateUrl: './practitioner-card.component.html',
  styleUrls: ['./practitioner-card.component.css']
})
export class PractitionerCardComponent implements OnInit {

  @Input() practitioner: Practitioner;

  constructor() { }

  ngOnInit() { }

}
