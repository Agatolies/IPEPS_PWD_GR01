import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryHomeComponent } from './salary-home.component';

describe('SalaryHomeComponent', () => {
  let component: SalaryHomeComponent;
  let fixture: ComponentFixture<SalaryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
