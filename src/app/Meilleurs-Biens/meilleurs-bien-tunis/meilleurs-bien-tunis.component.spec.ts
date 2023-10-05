import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursBienTunisComponent } from './meilleurs-bien-tunis.component';

describe('MeilleursBienTunisComponent', () => {
  let component: MeilleursBienTunisComponent;
  let fixture: ComponentFixture<MeilleursBienTunisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursBienTunisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleursBienTunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
