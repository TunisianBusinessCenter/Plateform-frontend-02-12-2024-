import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListSousseComponent } from './coffee-list-sousse.component';

describe('CoffeeListSousseComponent', () => {
  let component: CoffeeListSousseComponent;
  let fixture: ComponentFixture<CoffeeListSousseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListSousseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListSousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
