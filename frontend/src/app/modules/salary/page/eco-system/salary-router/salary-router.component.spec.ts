import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryRouterComponent } from './salary-router.component';

describe('SalaryRouterComponent', () => {
  let component: SalaryRouterComponent;
  let fixture: ComponentFixture<SalaryRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
