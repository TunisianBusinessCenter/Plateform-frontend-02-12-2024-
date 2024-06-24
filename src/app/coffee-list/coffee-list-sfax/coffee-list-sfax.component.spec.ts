import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListSfaxComponent } from './coffee-list-sfax.component';

describe('CoffeeListSfaxComponent', () => {
  let component: CoffeeListSfaxComponent;
  let fixture: ComponentFixture<CoffeeListSfaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeListSfaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListSfaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
