import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeAgencyComponent } from './coffee-agency.component';

describe('CoffeeAgencyComponent', () => {
  let component: CoffeeAgencyComponent;
  let fixture: ComponentFixture<CoffeeAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
