import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListBizerteComponent } from './coffee-list-bizerte.component';

describe('CoffeeListBizerteComponent', () => {
  let component: CoffeeListBizerteComponent;
  let fixture: ComponentFixture<CoffeeListBizerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListBizerteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListBizerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
