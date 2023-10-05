import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLybiaComponent } from './home-lybia.component';

describe('HomeLybiaComponent', () => {
  let component: HomeLybiaComponent;
  let fixture: ComponentFixture<HomeLybiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLybiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLybiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
