import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteursBizerteComponent } from './promoteurs-bizerte.component';

describe('PromoteursBizerteComponent', () => {
  let component: PromoteursBizerteComponent;
  let fixture: ComponentFixture<PromoteursBizerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteursBizerteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteursBizerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
