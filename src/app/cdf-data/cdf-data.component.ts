import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CdfDataService } from '../services/cdf-data.service';
import { Sigact } from '../models/sigact.model';

@Component({
  selector: 'app-cdf-data',
  templateUrl: './cdf-data.component.html',
  styleUrls: ['./cdf-data.component.css']
})
export class CdfDataComponent implements OnInit {
  sigacts: Sigact[] = [];
  private sigactSub: Subscription;

  constructor(public cdfDataService: CdfDataService) { }

  ngOnInit() {
    this.sigactSub = this.cdfDataService.getCdfDataUpdatedListener()
    .subscribe((sigacts: Sigact[]) => {
      this.sigacts = sigacts;
    });
    this.cdfDataService.getCdfData();
  }

}
