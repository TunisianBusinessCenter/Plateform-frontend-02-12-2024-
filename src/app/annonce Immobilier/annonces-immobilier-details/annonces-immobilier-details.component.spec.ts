import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesImmobilierDetailsComponent } from './annonces-immobilier-details.component';

describe('AnnoncesImmobilierDetailsComponent', () => {
  let component: AnnoncesImmobilierDetailsComponent;
  let fixture: ComponentFixture<AnnoncesImmobilierDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncesImmobilierDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesImmobilierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
