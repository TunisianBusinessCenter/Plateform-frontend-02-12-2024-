import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteursNabeulComponent } from './promoteurs-nabeul.component';

describe('PromoteursNabeulComponent', () => {
  let component: PromoteursNabeulComponent;
  let fixture: ComponentFixture<PromoteursNabeulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteursNabeulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteursNabeulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
