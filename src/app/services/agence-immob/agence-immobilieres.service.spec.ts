import { TestBed } from '@angular/core/testing';

import { AgenceImmobilieresService } from './agence-immobilieres.service';

describe('AgenceImmobilieresService', () => {
  let service: AgenceImmobilieresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenceImmobilieresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
