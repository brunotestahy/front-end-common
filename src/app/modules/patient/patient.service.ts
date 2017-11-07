import { Injectable, Inject } from '@angular/core';
import { FrontEndConfigProvider, FrontEndConfig } from '../configuration/configuration';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Patient } from './patient';
import { AbstractService } from '../services/abstract.service';

@Injectable()
export class PatientService extends AbstractService {

  private config: FrontEndConfig;

  private searchURL: string;
  private paginationURL: string;
  private careProviderURL: string;

  constructor(protected http: Http, @Inject(FrontEndConfigProvider) config) {
    super(http);
    this.config = config as FrontEndConfig;
    this.baseURL = config.patient.baseURL;
    this.searchURL = config.patient.searchURL;
    this.paginationURL = config.patient.paginationURL;
    this.careProviderURL = config.patient.careProviderURL;
  }

  public search(names?: string, room?: string, his?: string, admitted?: boolean, full?: boolean, count?: number): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('names', names);
    options.params.set('room', room);
    options.params.set('his', his);
    options.params.set('admitted', String(admitted));
    options.params.set('full', String(full));
    if (count) {
      options.params.set('count', String(count));
    }
    return super.get(this.searchURL + '/paginated', options);
  }

  public getMorePatients(urlNext: string): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('url', urlNext);
    return super.get(this.paginationURL, options);
  }

  public addCareProvider(patientId: string, practitionerId: string, careProviderType: string) {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('practitionerId', practitionerId);
    options.params.set('careProviderType', careProviderType);
    return super.put('/' + patientId + this.careProviderURL, null, options);
  }

  public removeCareProvider(patientId: string, practitionerId: string, careProviderType: string) {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('practitionerId', practitionerId);
    return super.delete('/' + patientId + this.careProviderURL, options);
  }
}
