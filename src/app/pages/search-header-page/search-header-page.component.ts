import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-search-header-page',
  templateUrl: './search-header-page.component.html',
  styleUrls: ['./search-header-page.component.css']
})
export class SearchHeaderPageComponent implements OnInit {

  suggestions: Array<string>;

  constructor() { }

  ngOnInit() {
  }

  updateSuggestions(text: string) {
    if (text == null || text.trim().length === 0) {
      this.suggestions = [];
    } else {
      this.suggestions = Array.from(new Array(5).keys()).map(v => `${text}${v}`);
    }
  }

}
