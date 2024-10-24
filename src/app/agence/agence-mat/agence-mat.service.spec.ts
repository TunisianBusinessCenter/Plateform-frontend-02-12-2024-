import { TestBed } from '@angular/core/testing';

import { AgenceMatService } from './agence-mat.service';

describe('AgenceMatService', () => {
  let service: AgenceMatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceMatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
