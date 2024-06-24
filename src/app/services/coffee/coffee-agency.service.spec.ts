import { TestBed } from '@angular/core/testing';

import { CoffeeAgencyService } from './coffee-agency.service';

describe('CoffeeAgencyService', () => {
  let service: CoffeeAgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeAgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
