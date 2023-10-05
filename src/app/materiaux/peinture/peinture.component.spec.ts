import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeintureComponent } from './peinture.component';

describe('PeintureComponent', () => {
  let component: PeintureComponent;
  let fixture: ComponentFixture<PeintureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeintureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeintureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
