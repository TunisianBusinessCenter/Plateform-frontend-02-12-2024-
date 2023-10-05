import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencesImmobDetailsComponent } from './agences-immob-details.component';

describe('AgencesImmobDetailsComponent', () => {
  let component: AgencesImmobDetailsComponent;
  let fixture: ComponentFixture<AgencesImmobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencesImmobDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencesImmobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
