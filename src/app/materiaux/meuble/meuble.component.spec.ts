import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeubleComponent } from './meuble.component';

describe('MeubleComponent', () => {
  let component: MeubleComponent;
  let fixture: ComponentFixture<MeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
