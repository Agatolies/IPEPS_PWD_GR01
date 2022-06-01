import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeletedComponent } from './employee-deleted.component';

describe('EmployeeDeletedComponent', () => {
  let component: EmployeeDeletedComponent;
  let fixture: ComponentFixture<EmployeeDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDeletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
