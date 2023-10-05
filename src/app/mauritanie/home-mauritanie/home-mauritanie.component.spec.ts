import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMauritanieComponent } from './home-mauritanie.component';

describe('HomeMauritanieComponent', () => {
  let component: HomeMauritanieComponent;
  let fixture: ComponentFixture<HomeMauritanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMauritanieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMauritanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
