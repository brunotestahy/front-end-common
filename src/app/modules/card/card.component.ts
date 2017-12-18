import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'smart-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() selected: boolean;
  @Output() cardClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  onCardClick() {
    this.cardClick.emit();
  }

}
