import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteursMahdiaComponent } from './promoteurs-mahdia.component';

describe('PromoteursMahdiaComponent', () => {
  let component: PromoteursMahdiaComponent;
  let fixture: ComponentFixture<PromoteursMahdiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteursMahdiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteursMahdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
