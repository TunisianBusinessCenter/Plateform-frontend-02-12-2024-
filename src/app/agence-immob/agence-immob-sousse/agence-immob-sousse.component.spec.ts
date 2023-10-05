import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceImmobSousseComponent } from './agence-immob-sousse.component';

describe('AgenceImmobSousseComponent', () => {
  let component: AgenceImmobSousseComponent;
  let fixture: ComponentFixture<AgenceImmobSousseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceImmobSousseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceImmobSousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
