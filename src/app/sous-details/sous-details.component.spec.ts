import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousDetailsComponent } from './sous-details.component';

describe('SousDetailsComponent', () => {
  let component: SousDetailsComponent;
  let fixture: ComponentFixture<SousDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
