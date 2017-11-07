import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  @Input('label') label: string;
  @Input('imgPath') imgPath: string;
  @Input('route') route: string;

  constructor() { }

  ngOnInit() {
  }

}
