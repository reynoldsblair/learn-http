import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { QuerySpecsService } from '../services/query-specs.service';
import { QuerySpec } from '../models/query-spec.model';

@Component({
  selector: 'app-query-specs',
  templateUrl: './query-specs.component.html',
  styleUrls: ['./query-specs.component.css']
})
export class QuerySpecsComponent implements OnInit {
  querySpecs: QuerySpec[] = [];
  private querySpecSub: Subscription;

  constructor(public querySpecsService: QuerySpecsService) { }

  ngOnInit() {
    this.querySpecSub = this.querySpecsService.getQuerySpecsUpdatedListener()
    .subscribe((querySpecs: QuerySpec[]) => {
      this.querySpecs = querySpecs;
    });
    this.querySpecsService.getQuerySpecs();
  }

}
