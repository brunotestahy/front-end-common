import { Response, RequestOptions, ConnectionBackend } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { HttpInterceptor } from './http-interceptor';
import { InterceptorConfig } from './http-interceptor';

import { FrontEndConfig } from '../configuration/configuration';


export class FrontEndHttp extends HttpInterceptor {
  private loginURL: string;
  private smartLoginURL: string;
  private authType: string;
  private patient = true;
  private login;
  private password;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, router: Router) {
    super(backend, defaultOptions, new InterceptorConfig({ noTokenError: true }), router);
  }

  setFrontEndConfig(frontEndConfig: FrontEndConfig) {
    this.loginURL = `${frontEndConfig.login.baseURL}${frontEndConfig.login.ldapURL}`;
    this.smartLoginURL = `${frontEndConfig.login.baseURL}${frontEndConfig.login.smartURL}`;
    this.authType = frontEndConfig.login.authType;
  }

  public doLogin(login: string, password: string): Observable<Response> {
    this.login = login;
    this.password = password;
    this.patient = false;

    const body = {};
    body['login'] = login;
    body['password'] = password;
    body['userType'] = 'EMPLOYEE';
    body['authType'] = this.authType;
    return super.post(this.loginURL, body, null, true);
  }

  public isPatient(): boolean {
    return this.patient;
  }

  public setPatient(isPatient: boolean): void {
    this.patient = isPatient;
  }

  public getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('smart_token');
      if (!token) {
        token = null;
      }
      resolve(token);
    });
  }

  public saveToken(token: string): Promise<string> {
    return new Promise((resolve, reject) => {
      localStorage.setItem('smart_token', token);
      resolve(token);
    });
  }

  protected refreshToken(): Observable<Response> {
    if (this.isPatient) {
      return super.post(this.smartLoginURL, {}, null, true);
    }
    const body = {};
    body['login'] = this.login;
    body['password'] = this.password;
    body['userType'] = 'EMPLOYEE';
    body['authType'] = this.authType;
    return super.post(this.loginURL, body, null, true);
  }
}

export const FrontEndHttpFactory = (backend: ConnectionBackend, defaultOptions: RequestOptions,
  config: FrontEndConfig, router: Router): FrontEndHttp => {
  const newInterceptor = new FrontEndHttp(backend, defaultOptions, router);
  newInterceptor.setFrontEndConfig(config);
  return newInterceptor;
};
