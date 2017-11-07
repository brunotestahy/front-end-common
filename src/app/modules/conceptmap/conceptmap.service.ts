import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FrontEndConfigProvider, FrontEndConfig } from '../configuration/configuration';
import { AbstractService } from '../services/abstract.service';

@Injectable()
export class ConceptmapService extends AbstractService {

  private config: FrontEndConfig;

  constructor(protected http: Http, @Inject(FrontEndConfigProvider) config) {
    super(http);
    this.config = config as FrontEndConfig;
    this.baseURL = this.config.conceptmap.baseURL;
  }

  get(system: string): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('system', system.toString());

    return super.get(null, options);
  }
}
