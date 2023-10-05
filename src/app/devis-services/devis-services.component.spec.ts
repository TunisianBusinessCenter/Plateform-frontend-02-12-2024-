import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisServicesComponent } from './devis-services.component';

describe('DevisServicesComponent', () => {
  let component: DevisServicesComponent;
  let fixture: ComponentFixture<DevisServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
