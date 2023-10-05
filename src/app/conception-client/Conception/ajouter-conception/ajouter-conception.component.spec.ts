import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterConceptionComponent } from './ajouter-conception.component';

describe('AjouterConceptionComponent', () => {
  let component: AjouterConceptionComponent;
  let fixture: ComponentFixture<AjouterConceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterConceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterConceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
