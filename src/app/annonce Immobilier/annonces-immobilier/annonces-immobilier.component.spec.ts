import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesImmobilierComponent } from './annonces-immobilier.component';

describe('AnnoncesImmobilierComponent', () => {
  let component: AnnoncesImmobilierComponent;
  let fixture: ComponentFixture<AnnoncesImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncesImmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
