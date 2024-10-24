import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceImmobComponent } from './agence-immob.component';

describe('AgenceImmobComponent', () => {
  let component: AgenceImmobComponent;
  let fixture: ComponentFixture<AgenceImmobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceImmobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceImmobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
