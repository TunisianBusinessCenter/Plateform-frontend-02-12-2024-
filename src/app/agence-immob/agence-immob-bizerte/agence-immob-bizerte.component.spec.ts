import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceImmobBizerteComponent } from './agence-immob-bizerte.component';

describe('AgenceImmobBizerteComponent', () => {
  let component: AgenceImmobBizerteComponent;
  let fixture: ComponentFixture<AgenceImmobBizerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceImmobBizerteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceImmobBizerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
