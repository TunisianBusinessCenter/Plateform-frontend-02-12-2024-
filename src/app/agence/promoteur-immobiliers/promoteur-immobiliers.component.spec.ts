import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteurImmobiliersComponent } from './promoteur-immobiliers.component';

describe('PromoteurImmobiliersComponent', () => {
  let component: PromoteurImmobiliersComponent;
  let fixture: ComponentFixture<PromoteurImmobiliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteurImmobiliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteurImmobiliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
