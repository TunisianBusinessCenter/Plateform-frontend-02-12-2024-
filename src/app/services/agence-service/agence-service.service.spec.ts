import { TestBed } from '@angular/core/testing';

import { AgenceServiceService } from './agence-service.service';

describe('AgenceServiceService', () => {
  let service: AgenceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
