import { TestBed } from '@angular/core/testing';

import { SharedAgenceImmobilierService } from './shared-agence-immobilier.service';

describe('SharedAgenceImmobilierService', () => {
  let service: SharedAgenceImmobilierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedAgenceImmobilierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
