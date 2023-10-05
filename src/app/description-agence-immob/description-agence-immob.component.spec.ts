import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAgenceImmobComponent } from './description-agence-immob.component';

describe('DescriptionAgenceImmobComponent', () => {
  let component: DescriptionAgenceImmobComponent;
  let fixture: ComponentFixture<DescriptionAgenceImmobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionAgenceImmobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionAgenceImmobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
