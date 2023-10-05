import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursBiensAgencyComponent } from './meilleurs-biens-agency.component';

describe('MeilleursBiensAgencyComponent', () => {
  let component: MeilleursBiensAgencyComponent;
  let fixture: ComponentFixture<MeilleursBiensAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursBiensAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleursBiensAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
