import { Component, OnInit, Input } from '@angular/core';
import { SelectComponent } from '../select.component';

@Component({
  selector: 'smart-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input() value: string;

  @Input() display: string;

  highlight: boolean;

  select: SelectComponent;

  constructor() { }

  ngOnInit() {
    this.highlight = false;
  }

  selectOption() {
    if (this.select != null) {
      this.select.updateState(this.value, this.display);
    }
  }

}
