import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListTunisComponent } from './coffee-list-tunis.component';

describe('CoffeeListTunisComponent', () => {
  let component: CoffeeListTunisComponent;
  let fixture: ComponentFixture<CoffeeListTunisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListTunisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListTunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
