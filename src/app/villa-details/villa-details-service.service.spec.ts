import { TestBed } from '@angular/core/testing';

import { VillaDetailsServiceService } from './villa-details-service.service';

describe('VillaDetailsServiceService', () => {
  let service: VillaDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillaDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
