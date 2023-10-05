import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceImmobSfaxComponent } from './agence-immob-sfax.component';

describe('AgenceImmobSfaxComponent', () => {
  let component: AgenceImmobSfaxComponent;
  let fixture: ComponentFixture<AgenceImmobSfaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceImmobSfaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceImmobSfaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
