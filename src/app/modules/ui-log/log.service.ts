import { FrontEndHttp } from './../http/front-end-http';
import { environment } from './../../../environments/environment';
import { Injectable, Inject } from '@angular/core';
import { AbstractService } from '../services/abstract.service';
import { Http, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FrontEndConfigProvider, FrontEndConfig } from '../configuration/configuration';

interface UILog {
  userId: string;
  timestamp: number;
  url: string;
  xrel: string;
  yrel: string;
  elementId: string;
  element: string;
}

@Injectable()
export class LogService extends AbstractService {
  private config: FrontEndConfig;
  private bulkURL: string;
  private eventStore = new Array<UILog>();
  private feHttp: FrontEndHttp;
  private errorCount = 0;
  private maxErrors;

  constructor(protected http: Http, @Inject(FrontEndConfigProvider) config) {
    super(http);
    this.config = config;
    this.feHttp = http as FrontEndHttp;
    this.baseURL = this.config.log.baseURL;
    this.bulkURL = this.config.log.bulkSaveURL;
    this.maxErrors = this.config.log.bulkRetry;
  }

  private bulkSave(logs: any): Observable<any> {
    return super.post(this.bulkURL, logs);
  }

  storeLocally(type: string, event: Event) {
    const target = event.target as HTMLElement;
    let id = target.id;
    let aux = target;
    while (!id && aux.parentNode) {
      aux = aux.parentNode as HTMLElement;
      id = aux.id;
    }
    const element = target.className ? `${target.tagName.toLowerCase()}.${('' + target.className).split(' ').join('.')}`
      : target.tagName.toLowerCase();
    let posx, posy;

    if (type !== 'click') {
      const touch = (event as TouchEvent).changedTouches[0];
      posx = touch.clientX;
      posy = touch.clientY;
    } else {
      posx = (event as MouseEvent).clientX;
      posy = (event as MouseEvent).clientY;
    }
    let userId;
    if (this.feHttp.isPatient()) {
      userId = sessionStorage.getItem('patient');
    } else {
      userId = sessionStorage.getItem('employee');
    }
    const obj: UILog = {
      userId: userId,
      timestamp: new Date().getTime(),
      url: target.baseURI,
      xrel: posx + '/' + screen.width,
      yrel: posy + '/' + screen.height,
      elementId: id,
      element: element
    };
    this.eventStore.push(obj);
  }

  store() {
    if (this.eventStore.length > 0) {
      const interactions = this.eventStore.splice(0);
      // Send data to server
      const errcb = function () {
        if (this.errorCount < this.maxErrors) {
          this.errorCount++;
          this.eventStore = interactions.concat(this.eventStore);
        }
        // else discards notifications
      };
      const succ = function () {
        this.errorCount = 0;
      };
      this.bulkSave(interactions).subscribe(succ, errcb);
    }
  }
}
