import { TestBed } from '@angular/core/testing';

import { CdfDataService } from './cdf-data.service';

describe('CdfDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CdfDataService = TestBed.get(CdfDataService);
    expect(service).toBeTruthy();
  });
});
