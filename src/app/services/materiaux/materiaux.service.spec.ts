import { TestBed } from '@angular/core/testing';

import { MateriauxService } from './materiaux.service';

describe('MateriauxService', () => {
  let service: MateriauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
