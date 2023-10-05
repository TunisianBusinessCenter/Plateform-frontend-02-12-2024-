import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisProduitComponent } from './devis-produit.component';

describe('DevisProduitComponent', () => {
  let component: DevisProduitComponent;
  let fixture: ComponentFixture<DevisProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
