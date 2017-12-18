import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserLoader } from './modules/user-loader/user-loader';
import { LoginService } from './modules/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'smart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UserLoader {
  title = 'Front End Showcase';

  public constructor(private titleService: Title, protected loginService: LoginService, protected router: Router) {
    super(loginService, router);
    this.titleService.setTitle(this.title);
  }

}
