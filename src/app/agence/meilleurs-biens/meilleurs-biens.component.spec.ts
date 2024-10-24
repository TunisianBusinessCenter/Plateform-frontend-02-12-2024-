import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursBiensComponent } from './meilleurs-biens.component';

describe('MeilleursBiensComponent', () => {
  let component: MeilleursBiensComponent;
  let fixture: ComponentFixture<MeilleursBiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursBiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleursBiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
