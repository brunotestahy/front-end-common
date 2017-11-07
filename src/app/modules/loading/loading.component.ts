import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() loader: string;

  @Input() loaderClass: string;

  constructor() { }

  ngOnInit() {
  }

}
