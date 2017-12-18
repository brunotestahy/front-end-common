import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

export abstract class UserLoader implements OnInit {

  protected type: string;

  constructor(protected loginService: LoginService, protected router: Router) { }

  ngOnInit() {
    // sessionStorage.clear();
    this.loginService.me().subscribe(response => {
      if (response.room != null && response.room.trim().length !== 0) {
        this.type = 'patient';
        this.loginService.setPatient(true);
      } else {
        this.type = 'employee';
        this.loginService.setPatient(false);
      }
      sessionStorage.setItem(this.type, JSON.stringify(response));
      this.loginService.getMeSubject().next(response);
      this.handleAccess();
    }, error => {
      this.loginService.setPatient(false);
      this.router.navigate(['/login']);
    });
  }

  protected handleAccess() {
    /**
     * The application will decide whether to
     * override this method
     */
  }

}
