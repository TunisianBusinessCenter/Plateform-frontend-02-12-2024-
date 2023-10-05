import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteuresDjerbaComponent } from './promoteures-djerba.component';

describe('PromoteuresDjerbaComponent', () => {
  let component: PromoteuresDjerbaComponent;
  let fixture: ComponentFixture<PromoteuresDjerbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteuresDjerbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteuresDjerbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
