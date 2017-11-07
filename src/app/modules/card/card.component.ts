import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'smart-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() cardClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
