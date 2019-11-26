import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuerySpec } from '../models/query-spec.model';

@Injectable({
  providedIn: 'root'
})
export class QuerySpecsService {
  private querySpecs: QuerySpec[] = [];
  private querySpecsUpdated = new Subject<QuerySpec[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getQuerySpecs() {
    this.http.get<any>(
      'https://ngic-we.field.issinc.com/app-proxy/_webtas_data_service_v1/cdf/metadata-ql?query={informationModels{querySpecs{uri,url,executeUrl,prettyName,properties}}}'
      )
      .pipe(map((res) => {
        return res.data.informationModels[0].querySpecs.map(querySpec => {
          return {
            uri: querySpec.uri,
            url: querySpec.url,
            executeUrl: querySpec.executeUrl,
            prettyName: querySpec.prettyName
          };
        });
      }))
    .subscribe(fetchedQuerySpecs => {
      this.querySpecs = fetchedQuerySpecs;
      this.querySpecsUpdated.next([...this.querySpecs]);
    });
  }

  getQuerySpecsUpdatedListener() {
    return this.querySpecsUpdated.asObservable();
  }
}
