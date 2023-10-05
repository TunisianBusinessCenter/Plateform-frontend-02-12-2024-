import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteursMonastirComponent } from './promoteurs-monastir.component';

describe('PromoteursMonastirComponent', () => {
  let component: PromoteursMonastirComponent;
  let fixture: ComponentFixture<PromoteursMonastirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteursMonastirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteursMonastirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
