import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceMatComponent } from './agence-mat.component';

describe('AgenceMatComponent', () => {
  let component: AgenceMatComponent;
  let fixture: ComponentFixture<AgenceMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
