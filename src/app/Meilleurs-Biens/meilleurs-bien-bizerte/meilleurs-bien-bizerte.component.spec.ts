import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursBienBizerteComponent } from './meilleurs-bien-bizerte.component';

describe('MeilleursBienBizerteComponent', () => {
  let component: MeilleursBienBizerteComponent;
  let fixture: ComponentFixture<MeilleursBienBizerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursBienBizerteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleursBienBizerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
