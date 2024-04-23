import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCoffeeComponent } from './description-coffee.component';

describe('DescriptionCoffeeComponent', () => {
  let component: DescriptionCoffeeComponent;
  let fixture: ComponentFixture<DescriptionCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
