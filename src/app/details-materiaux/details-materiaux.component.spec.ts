import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMateriauxComponent } from './details-materiaux.component';

describe('DetailsMateriauxComponent', () => {
  let component: DetailsMateriauxComponent;
  let fixture: ComponentFixture<DetailsMateriauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMateriauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMateriauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
