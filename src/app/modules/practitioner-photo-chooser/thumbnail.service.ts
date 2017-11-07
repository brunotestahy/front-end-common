import { Injectable, Inject } from '@angular/core';
import { FrontEndConfigProvider, FrontEndConfig } from '../configuration/configuration';
import { Http, Response } from '@angular/http';
import { HttpInterceptor } from '../http/http-interceptor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ThumbnailService {

  private config: FrontEndConfig;

  constructor(private http: Http, @Inject(FrontEndConfigProvider) config) {
    this.config = config as FrontEndConfig;
  }

  toURI(photo: File) {

    const formData = new FormData();
    formData.append('photo', photo);

    return (this.http as HttpInterceptor).post(this.config.thumbnail, formData, undefined, true).map((response: Response) => {
      return response.json();
    });
  }

}
