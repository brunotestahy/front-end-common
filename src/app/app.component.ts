import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'smart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front End Showcase';

  public constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

}
