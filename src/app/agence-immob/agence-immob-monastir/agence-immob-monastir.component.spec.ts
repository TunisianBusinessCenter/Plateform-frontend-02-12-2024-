import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceImmobMonastirComponent } from './agence-immob-monastir.component';

describe('AgenceImmobMonastirComponent', () => {
  let component: AgenceImmobMonastirComponent;
  let fixture: ComponentFixture<AgenceImmobMonastirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceImmobMonastirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceImmobMonastirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
