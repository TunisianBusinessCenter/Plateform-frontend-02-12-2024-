import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursBienNabeulComponent } from './meilleurs-bien-nabeul.component';

describe('MeilleursBienNabeulComponent', () => {
  let component: MeilleursBienNabeulComponent;
  let fixture: ComponentFixture<MeilleursBienNabeulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursBienNabeulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleursBienNabeulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
