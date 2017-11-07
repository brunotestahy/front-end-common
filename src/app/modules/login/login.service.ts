import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { AbstractService } from '../services/abstract.service';
import { FrontEndConfigProvider } from '../configuration/configuration';
import { FrontEndHttp } from '../http/front-end-http';
import { BehaviorSubject  } from 'rxjs/Rx';

@Injectable()
export class LoginService extends AbstractService {
  private meURL;
  private frontEndHttp: FrontEndHttp;

  private meSubject = new BehaviorSubject <any>(null);

  constructor(protected http: Http, @Inject(FrontEndConfigProvider) config) {
    super(http);
    this.meURL = `${config.login.baseURL}${config.login.meURL}`;
    this.frontEndHttp = this.http as FrontEndHttp;
  }

  login(login: string, password: string): Observable<Response> {
    return this.frontEndHttp.doLogin(login, password);
  }

  saveToken(token: string): Promise<string> {
    return this.frontEndHttp.saveToken(token);
  }

  public isPatient(): boolean {
    return this.frontEndHttp.isPatient();
  }

  public setPatient(isPatient: boolean): void {
    this.frontEndHttp.setPatient(isPatient);
  }

  getMeSubject() {
    return this.meSubject;
  }

  me(): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('full', 'true');
    return this.http
      .get(this.meURL, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  hasPermission(resource: string, type: string) {
    const strEmployee = sessionStorage.getItem(this.isPatient() ? 'patient' : 'employee');
    if (strEmployee === null) {
      return;
    }
    const currentUser = JSON.parse(strEmployee).user;

    if (!currentUser.role) {
      return false;
    }

    const permissions = currentUser.role.permissions;
    for (let index = 0; index < permissions.length; index++) {
      const item = permissions[index];
      if (item.resource.name === resource && item.type === type) {
        return true;
      }
    }

    return false;
  }
}
