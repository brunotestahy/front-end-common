import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  
  @Input() href: string;
  @Input() active: boolean;

  constructor() { }

  ngOnInit() {
  }

}
