import { TestBed } from '@angular/core/testing';

import { MeilleursBiensService } from './meilleurs-biens.service';

describe('MeilleursBiensService', () => {
  let service: MeilleursBiensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeilleursBiensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
