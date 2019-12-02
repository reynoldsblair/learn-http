import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import {
  Subscription,
  Observable,
  of } from 'rxjs';

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

  constructor(public cdfDataService: CdfDataService) { }

  ngOnInit() {
    this.cdfSub = this.cdfDataService.getCdfDataUpdatedListener()
    .subscribe((cdfData: any[]) => {
      this.cdfData = cdfData;
    });
    this.cdfDataService.getCdfData();
    this.getColumns();
  }

  getColumns() {
    Object.keys(this.cdfData[0]).forEach(Key => {
      console.log(Key);
      this.columns.push(Key);
    });
    console.log(this.columns);
  }

  ngOnDestroy() {
    this.cdfSub.unsubscribe();
  }

}

