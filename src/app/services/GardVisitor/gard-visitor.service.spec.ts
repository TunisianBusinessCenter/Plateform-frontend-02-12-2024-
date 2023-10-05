import { TestBed } from '@angular/core/testing';

import { GardVisitorService } from './gard-visitor.service';

describe('GardVisitorService', () => {
  let service: GardVisitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GardVisitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
