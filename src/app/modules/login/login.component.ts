import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FrontEndConfigProvider, FrontEndConfig } from '../configuration/configuration';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'smart-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() headerTitle: string;
  @Input() loginPlaceHolder: string;
  @Input() passwordPlaceHolder: string;
  @Input() loginButtonLabel: string;
  @Input() authErrorMessage: string;
  @Input() tokenErrorMessage: string;

  loading: boolean;

  errorLoginToken: boolean;
  errorLoginAuth: boolean;
  private config: FrontEndConfig;

  constructor(private loginService: LoginService, private router: Router,
    @Inject(FrontEndConfigProvider) config) {
    this.config = config as FrontEndConfig;
  }

  ngOnInit() {
    this.loading = false;
    this.errorLoginAuth = false;
    this.errorLoginToken = false;
  }

  onSubmit(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.loading = true;
    this.errorLoginAuth = false;
    this.errorLoginToken = false;

    this.loginService.login(form.value.login, form.value.password).subscribe(
      response => {
        if (response) {
          const data = response.json();
          if (data.token) {
            this.loginService.setPatient(false);
            this.loginService.saveToken(data.token);
            this.loginService.me().subscribe(meResponse => {
              sessionStorage.setItem('employee', JSON.stringify(meResponse));
              // this.loading = false;
              this.router.navigate([(this.config as FrontEndConfig).homeRoute]);
            }, error => {
              this.loading = false;
              this.errorLoginToken = true;
              console.log('erro me');
            });
          } else {
            // mostrar erro na tela de que login falhou (apesar do erro ser inesperado pois não recebeu o token)
            this.loading = false;
            this.errorLoginToken = true;
            console.log('erro token');
          }
        }
      }, error => {
        this.loading = false;
        if (error.status === 0) { // timeout
          this.errorLoginToken = true;
          console.log('login timeout');
        } else {
          // mostrar erro na tela de que login falhou por login ou senha errada
          this.errorLoginAuth = true;
          console.log('erro auth');
        }
      }
    );
  }

}
