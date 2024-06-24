import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListMonastirComponent } from './coffee-list-monastir.component';

describe('CoffeeListMonastirComponent', () => {
  let component: CoffeeListMonastirComponent;
  let fixture: ComponentFixture<CoffeeListMonastirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListMonastirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListMonastirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
