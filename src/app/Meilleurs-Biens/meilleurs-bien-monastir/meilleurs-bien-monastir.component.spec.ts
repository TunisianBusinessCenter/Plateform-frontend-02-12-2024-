import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursBienMonastirComponent } from './meilleurs-bien-monastir.component';

describe('MeilleursBienMonastirComponent', () => {
  let component: MeilleursBienMonastirComponent;
  let fixture: ComponentFixture<MeilleursBienMonastirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursBienMonastirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleursBienMonastirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
