import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'smart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() logoHref = '/';
  @Output() logoClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onlogoClick() {
    this.logoClick.emit();
  }

}
