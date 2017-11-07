import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'smart-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  @Input() label: string;
  @Input() route: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.setPatient(true);
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate([this.route || '/login']);
  }

}
