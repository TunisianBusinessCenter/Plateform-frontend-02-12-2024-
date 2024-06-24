import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListMahdiaComponent } from './coffee-list-mahdia.component';

describe('CoffeeListMahdiaComponent', () => {
  let component: CoffeeListMahdiaComponent;
  let fixture: ComponentFixture<CoffeeListMahdiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListMahdiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListMahdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
