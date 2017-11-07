import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smart-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() opened: boolean;
  @Output() overlayClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onOverlayClick(event: Event) {
    if ((event.target as HTMLElement).classList.contains('overlay')) {
      this.overlayClick.emit();
    }
  }

}
