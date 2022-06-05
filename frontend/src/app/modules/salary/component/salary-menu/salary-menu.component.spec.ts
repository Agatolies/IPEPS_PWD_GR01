import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryMenuComponent } from './salary-menu.component';

describe('SalaryMenuComponent', () => {
  let component: SalaryMenuComponent;
  let fixture: ComponentFixture<SalaryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
