import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteursTabarkaComponent } from './promoteurs-tabarka.component';

describe('PromoteursTabarkaComponent', () => {
  let component: PromoteursTabarkaComponent;
  let fixture: ComponentFixture<PromoteursTabarkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteursTabarkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteursTabarkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
