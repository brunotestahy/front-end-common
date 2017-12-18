import { Injectable, Inject } from '@angular/core';
import { FrontEndConfigProvider, FrontEndConfig } from '../configuration/configuration';
import { AbstractService } from '../services/abstract.service';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Rating } from './rating';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RatingService extends AbstractService {

  private config: FrontEndConfig;
  private searchURL: string;
  private reasonURL: string;
  private paginationURL: string;

  constructor(protected http: Http, @Inject(FrontEndConfigProvider) config) {
    super(http);
    this.config = config as FrontEndConfig;
    this.baseURL = config.rating.baseURL;
    this.searchURL = config.rating.searchURL;
    this.reasonURL = config.rating.reasonURL;
    this.paginationURL = config.rating.paginationURL;
  }

  public save(rating: Rating) {
    if (rating.id != null) {
      return super.put(`${rating.id}`, rating);
    } else {
      return super.post(null, rating);
    }
  }

  public search(hisAdtId?: string, startDate?: string, endDate?: string, rating?: number, comment?: string, patientId?: string, practitionerId?: string, full?: boolean): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('hisAdtId', hisAdtId);
    options.params.set('startDate', startDate);
    options.params.set('endDate', endDate);
    options.params.set('comment', comment);
    options.params.set('patientId', patientId);
    options.params.set('practitionerId', practitionerId);
    options.params.set('full', String(full));
    if (rating) {
      options.params.set('rating', String(rating));
    }
    return super.get(this.searchURL, options);
  }

  public searchPaginated(hisAdtId?: string, startDate?: string, endDate?: string, rating?: number, comment?: string, patientId?: string, practitionerId?: string, full?: boolean, count?: number): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('hisAdtId', hisAdtId);
    options.params.set('startDate', startDate);
    options.params.set('endDate', endDate);
    options.params.set('comment', comment);
    options.params.set('patientId', patientId);
    options.params.set('practitionerId', practitionerId);
    options.params.set('full', String(full));
    if (count) {
      options.params.set('count', String(count));
    }
    if (rating) {
      options.params.set('rating', String(rating));
    }
    return super.get(this.searchURL + '/paginated', options);
  }

  public getMoreRatings(urlNext: string): Observable<any> {
    const options = new RequestOptions();
    options.params = new URLSearchParams();
    options.params.set('url', urlNext);
    return super.get(this.paginationURL, options);
  }

  public getReasons(): Observable<any> {
    return super.get(this.reasonURL).map((result: any) => {
      return result.values;
    });
  }
}
