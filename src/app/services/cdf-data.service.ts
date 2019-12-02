import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdfDataService {
  private cdfData: any[] = [];
  private cdfDataUpdated = new Subject<any[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getCdfData() {
    this.http.get<any>(
      '/app-proxy/_webtas_data_service_v1/cdf/data/NGIC/queryspec/OperationsSIGACTPublishedReport?$rows=100'
      )
    .subscribe(fetchedCdfData => {
      this.cdfData = fetchedCdfData.data;
      this.cdfDataUpdated.next([...this.cdfData]);
    });
  }

  getCdfDataUpdatedListener() {
    return this.cdfDataUpdated.asObservable();
  }
}

