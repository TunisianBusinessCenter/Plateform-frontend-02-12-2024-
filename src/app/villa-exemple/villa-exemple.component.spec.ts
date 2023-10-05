import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaExempleComponent } from './villa-exemple.component';

describe('VillaExempleComponent', () => {
  let component: VillaExempleComponent;
  let fixture: ComponentFixture<VillaExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaExempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
