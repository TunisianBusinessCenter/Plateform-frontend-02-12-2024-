import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceImmobNabeulComponent } from './agence-immob-nabeul.component';

describe('AgenceImmobNabeulComponent', () => {
  let component: AgenceImmobNabeulComponent;
  let fixture: ComponentFixture<AgenceImmobNabeulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceImmobNabeulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceImmobNabeulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
