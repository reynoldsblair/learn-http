import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CdfDataService } from '../services/cdf-data.service';

@Component({
  selector: 'app-cdf-data',
  templateUrl: './cdf-data.component.html',
  styleUrls: ['./cdf-data.component.css']
})
export class CdfDataComponent implements OnInit {
  cdfData: any[] = [];
  private cdfSub: Subscription;

  constructor(public cdfDataService: CdfDataService) { }

  ngOnInit() {
    this.cdfSub = this.cdfDataService.getCdfDataUpdatedListener()
    .subscribe((cdfData: any[]) => {
      this.cdfData = cdfData;
    });
    this.cdfDataService.getCdfData();
  }

}
