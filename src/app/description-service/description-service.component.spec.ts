import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionServiceComponent } from './description-service.component';

describe('DescriptionServiceComponent', () => {
  let component: DescriptionServiceComponent;
  let fixture: ComponentFixture<DescriptionServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
