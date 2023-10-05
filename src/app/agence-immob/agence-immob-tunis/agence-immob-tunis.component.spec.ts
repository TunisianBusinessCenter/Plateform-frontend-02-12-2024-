import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceImmobTunisComponent } from './agence-immob-tunis.component';

describe('AgenceImmobTunisComponent', () => {
  let component: AgenceImmobTunisComponent;
  let fixture: ComponentFixture<AgenceImmobTunisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceImmobTunisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceImmobTunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
