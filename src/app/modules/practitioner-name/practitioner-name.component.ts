import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-practitioner-name',
  templateUrl: './practitioner-name.component.html',
  styleUrls: ['./practitioner-name.component.css']
})
export class PractitionerNameComponent implements OnInit {

  @Input() practitionerName: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() { }
}
