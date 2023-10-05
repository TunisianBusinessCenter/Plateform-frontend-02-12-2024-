import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteursSousseComponent } from './promoteurs-sousse.component';

describe('PromoteursSousseComponent', () => {
  let component: PromoteursSousseComponent;
  let fixture: ComponentFixture<PromoteursSousseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteursSousseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteursSousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
