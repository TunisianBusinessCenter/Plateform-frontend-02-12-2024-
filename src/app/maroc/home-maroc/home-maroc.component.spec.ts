import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMarocComponent } from './home-maroc.component';

describe('HomeMarocComponent', () => {
  let component: HomeMarocComponent;
  let fixture: ComponentFixture<HomeMarocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMarocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMarocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
