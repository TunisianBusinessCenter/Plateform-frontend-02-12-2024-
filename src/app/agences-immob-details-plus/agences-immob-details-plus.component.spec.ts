import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencesImmobDetailsPlusComponent } from './agences-immob-details-plus.component';

describe('AgencesImmobDetailsPlusComponent', () => {
  let component: AgencesImmobDetailsPlusComponent;
  let fixture: ComponentFixture<AgencesImmobDetailsPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencesImmobDetailsPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencesImmobDetailsPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
