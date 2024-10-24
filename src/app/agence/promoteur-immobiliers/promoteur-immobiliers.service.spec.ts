import { TestBed } from '@angular/core/testing';

import { PromoteurImmobiliersService } from './promoteur-immobiliers.service';

describe('PromoteurImmobiliersService', () => {
  let service: PromoteurImmobiliersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoteurImmobiliersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
