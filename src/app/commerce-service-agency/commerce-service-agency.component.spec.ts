import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceServiceAgencyComponent } from './commerce-service-agency.component';

describe('CommerceServiceAgencyComponent', () => {
  let component: CommerceServiceAgencyComponent;
  let fixture: ComponentFixture<CommerceServiceAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommerceServiceAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceServiceAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
