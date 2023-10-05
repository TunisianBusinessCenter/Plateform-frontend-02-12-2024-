import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursBienSousseComponent } from './meilleurs-bien-sousse.component';

describe('MeilleursBienSousseComponent', () => {
  let component: MeilleursBienSousseComponent;
  let fixture: ComponentFixture<MeilleursBienSousseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursBienSousseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleursBienSousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
