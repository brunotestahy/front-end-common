import { Injectable, Inject } from '@angular/core';
import { FrontEndConfigProvider, FrontEndConfig } from '../configuration/configuration';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Practitioner } from './practitioner';
import { PractitionerRole } from './practitioner-role';
import { AbstractService } from '../services/abstract.service';

@Injectable()
export class PractitionerService extends AbstractService {

  private config: FrontEndConfig;

  private identification: string;

  private searchURL: string;
  private paginationURL: string;
  private roleURL: string;

  constructor(protected http: Http, @Inject(FrontEndConfigProvider) config) {
    super(http);
    this.config = config as FrontEndConfig;
    this.baseURL = config.practitioner.baseURL;
    this.searchURL = config.practitioner.searchURL;
    this.paginationURL = config.practitioner.paginationURL;
    this.roleURL = config.practitioner.roleURL;
  }

  fectchRoles() {
    return super.get(this.roleURL).map((result: any) => {
      return result.values;
    });
    /*return Observable.fromPromise(new Promise((resolve, reject) => {
      resolve([{ 'display': 'Médico', 'code': 'medico' }]);
    }));*/
  }

  save(practitioner: Practitioner) {
    if (practitioner.id != null) {
      return super.put(`${practitioner.id}`, practitioner);
    } else {
      return super.post(null, practitioner);
    }
    /*return Observable.fromPromise(new Promise((resolve, reject) => {
      // resolve(practitioner);
      reject();
    }));*/
  }

  public searchPractitioners(names?: string, his?: string, full?: boolean, count?: number): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('names', names);
    options.params.set('his', his);
    options.params.set('full', String(full));
    if (count) {
      options.params.set('count', String(count));
    }
    return super.get(this.searchURL + '/paginated', options);
  }

  public getMorePractitioners(urlNext: string): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('url', urlNext);
    return super.get(this.paginationURL, options);
  }

}
