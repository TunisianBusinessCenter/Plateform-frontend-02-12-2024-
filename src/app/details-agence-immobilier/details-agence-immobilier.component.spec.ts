import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAgenceImmobilierComponent } from './details-agence-immobilier.component';

describe('DetailsAgenceImmobilierComponent', () => {
  let component: DetailsAgenceImmobilierComponent;
  let fixture: ComponentFixture<DetailsAgenceImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAgenceImmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAgenceImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
