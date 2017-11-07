import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FrontEndConfigProvider, FrontEndConfig } from '../configuration/configuration';
import { AbstractService } from '../services/abstract.service';

@Injectable()
export class RoomService extends AbstractService {

  private config: FrontEndConfig;
  private sectorURL: string;

  constructor(protected http: Http, @Inject(FrontEndConfigProvider) config) {
    super(http);
    this.config = config as FrontEndConfig;
    this.baseURL = config.room.baseURL;
    this.sectorURL = config.room.sectorURL;
  }

  get(): Observable<any> {
    return super.get();
  }

  getSectors(): Observable<any> {
    return super.get(this.sectorURL);
  }

}
