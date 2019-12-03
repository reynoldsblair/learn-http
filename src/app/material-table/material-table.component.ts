import {
  Component,
  OnInit,
  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CdfDataService } from '../services/cdf-data.service';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit, OnDestroy {
  cdfData: any[] = [];
  private cdfSub: Subscription;
  columns: string[] = [];
  isLoading = false;

  constructor(public cdfDataService: CdfDataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.cdfSub = this.cdfDataService.getCdfDataUpdatedListener()
    .subscribe((cdfData: any[]) => {
      this.cdfData = cdfData;
    });
    this.cdfDataService.getCdfData();
    this.getColumns();
    this.isLoading = false;
  }

  getColumns() {
    Object.keys(this.cdfData[0]).forEach(Key => {
      this.columns.push(Key);
    });
  }

  ngOnDestroy() {
    this.cdfSub.unsubscribe();
  }

}

