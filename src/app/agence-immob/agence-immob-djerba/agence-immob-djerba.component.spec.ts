import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceImmobDjerbaComponent } from './agence-immob-djerba.component';

describe('AgenceImmobDjerbaComponent', () => {
  let component: AgenceImmobDjerbaComponent;
  let fixture: ComponentFixture<AgenceImmobDjerbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceImmobDjerbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceImmobDjerbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
