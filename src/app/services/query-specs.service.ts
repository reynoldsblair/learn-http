import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuerySpec } from '../models/query-spec.model';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class QuerySpecsService {
  private querySpecs: QuerySpec[] = [];
  private querySpecsUpdated = new Subject<QuerySpec[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getQuerySpecs() {
    this.http.get<any>('https://ngic-we.field.issinc.com/app-proxy/_webtas_data_service_v1/cdf/metadata-ql?query={informationModels{querySpecs{uri,url,executeUrl, prettyName,properties}}}')
    .subscribe(fetchedQuerySpecs => {
      // TODO: rxjs map to get querySpecs out of infomation models object
      this.querySpecs = fetchedQuerySpecs;
      this.querySpecsUpdated.next([...this.querySpecs]);
    });
  }

  getQuerySpecsUpdatedListener() {
    return this.querySpecsUpdated.asObservable();
  }
}
