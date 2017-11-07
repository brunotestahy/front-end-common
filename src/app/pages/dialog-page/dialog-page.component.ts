import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.css']
})
export class DialogPageComponent implements OnInit {

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

}
