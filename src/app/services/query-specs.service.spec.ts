import { TestBed } from '@angular/core/testing';

import { QuerySpecsService } from './query-specs.service';

describe('QuerySpecsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuerySpecsService = TestBed.get(QuerySpecsService);
    expect(service).toBeTruthy();
  });
});
