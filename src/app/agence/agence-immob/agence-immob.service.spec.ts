import { TestBed } from '@angular/core/testing';

import { AgenceImmobService } from './agence-immob.service';

describe('AgenceImmobService', () => {
  let service: AgenceImmobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceImmobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
