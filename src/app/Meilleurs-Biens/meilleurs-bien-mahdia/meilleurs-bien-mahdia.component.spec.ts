import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursBienMahdiaComponent } from './meilleurs-bien-mahdia.component';

describe('MeilleursBienMahdiaComponent', () => {
  let component: MeilleursBienMahdiaComponent;
  let fixture: ComponentFixture<MeilleursBienMahdiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursBienMahdiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleursBienMahdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
