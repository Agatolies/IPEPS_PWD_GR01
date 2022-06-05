import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDeletedComponent } from './salary-deleted.component';

describe('SalaryDeletedComponent', () => {
  let component: SalaryDeletedComponent;
  let fixture: ComponentFixture<SalaryDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryDeletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
