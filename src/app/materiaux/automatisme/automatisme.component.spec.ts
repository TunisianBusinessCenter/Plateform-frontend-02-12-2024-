import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatismeComponent } from './automatisme.component';

describe('AutomatismeComponent', () => {
  let component: AutomatismeComponent;
  let fixture: ComponentFixture<AutomatismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomatismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
