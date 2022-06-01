import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRouterComponent } from './employee-router.component';

describe('EmployeeRouterComponent', () => {
  let component: EmployeeRouterComponent;
  let fixture: ComponentFixture<EmployeeRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
