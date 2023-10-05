import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursBienSfaxComponent } from './meilleurs-bien-sfax.component';

describe('MeilleursBienSfaxComponent', () => {
  let component: MeilleursBienSfaxComponent;
  let fixture: ComponentFixture<MeilleursBienSfaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursBienSfaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleursBienSfaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
