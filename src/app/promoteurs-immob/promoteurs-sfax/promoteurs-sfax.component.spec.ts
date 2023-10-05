import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteursSfaxComponent } from './promoteurs-sfax.component';

describe('PromoteursSfaxComponent', () => {
  let component: PromoteursSfaxComponent;
  let fixture: ComponentFixture<PromoteursSfaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteursSfaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteursSfaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
