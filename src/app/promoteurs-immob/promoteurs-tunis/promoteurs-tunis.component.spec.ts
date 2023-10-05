import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteursTunisComponent } from './promoteurs-tunis.component';

describe('PromoteursTunisComponent', () => {
  let component: PromoteursTunisComponent;
  let fixture: ComponentFixture<PromoteursTunisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteursTunisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteursTunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
