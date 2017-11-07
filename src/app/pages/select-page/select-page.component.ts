import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {

  value: string;

  constructor() { }

  ngOnInit() {
  }

  onchange(value: string) {
    console.log(this.value);
  }

}
