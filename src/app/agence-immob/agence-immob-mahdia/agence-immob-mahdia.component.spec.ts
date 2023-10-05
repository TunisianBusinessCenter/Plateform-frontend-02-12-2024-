import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceImmobMahdiaComponent } from './agence-immob-mahdia.component';

describe('AgenceImmobMahdiaComponent', () => {
  let component: AgenceImmobMahdiaComponent;
  let fixture: ComponentFixture<AgenceImmobMahdiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceImmobMahdiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceImmobMahdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
