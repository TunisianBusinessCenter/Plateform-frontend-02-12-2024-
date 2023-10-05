import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlgerieComponent } from './home-algerie.component';

describe('HomeAlgerieComponent', () => {
  let component: HomeAlgerieComponent;
  let fixture: ComponentFixture<HomeAlgerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlgerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlgerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
