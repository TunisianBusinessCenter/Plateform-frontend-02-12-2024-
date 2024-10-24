import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelContactComponent } from './model-contact.component';

describe('ModelContactComponent', () => {
  let component: ModelContactComponent;
  let fixture: ComponentFixture<ModelContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
