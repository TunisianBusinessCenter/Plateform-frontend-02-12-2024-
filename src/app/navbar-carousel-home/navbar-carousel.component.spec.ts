import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCarouselComponent } from './navbar-carousel.component';

describe('NavbarCarouselComponent', () => {
  let component: NavbarCarouselComponent;
  let fixture: ComponentFixture<NavbarCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
