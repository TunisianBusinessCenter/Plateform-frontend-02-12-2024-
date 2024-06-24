import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListNabeulComponent } from './coffee-list-nabeul.component';

describe('CoffeeListNabeulComponent', () => {
  let component: CoffeeListNabeulComponent;
  let fixture: ComponentFixture<CoffeeListNabeulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListNabeulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListNabeulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
