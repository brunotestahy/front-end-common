import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smart-save-changes-button',
  templateUrl: './save-changes-button.component.html',
  styleUrls: ['./save-changes-button.component.css']
})
export class SaveChangesButtonComponent implements OnInit {

  @Input() text: string;
  @Output() buttonClick = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit() { }

  onbuttonClick(event: MouseEvent) {
    this.buttonClick.emit(event);
  }

}
