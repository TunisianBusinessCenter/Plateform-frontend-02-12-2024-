import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffageComponent } from './chauffage.component';

describe('ChauffageComponent', () => {
  let component: ChauffageComponent;
  let fixture: ComponentFixture<ChauffageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChauffageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
