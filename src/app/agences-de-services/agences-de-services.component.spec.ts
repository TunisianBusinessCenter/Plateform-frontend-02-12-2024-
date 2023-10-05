import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencesDeServicesComponent } from './agences-de-services.component';

describe('AgencesDeServicesComponent', () => {
  let component: AgencesDeServicesComponent;
  let fixture: ComponentFixture<AgencesDeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencesDeServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencesDeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
