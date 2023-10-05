import { TestBed } from '@angular/core/testing';

import { VisitorCounterService } from './visitor-counter.service';

describe('VisitorCounterService', () => {
  let service: VisitorCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
