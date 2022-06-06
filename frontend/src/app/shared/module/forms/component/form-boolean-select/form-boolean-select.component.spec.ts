import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBooleanSelectComponent } from '@shared/module/forms/component';

describe('FormBooleanSelectComponent', () => {
  let component: FormBooleanSelectComponent;
  let fixture: ComponentFixture<FormBooleanSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBooleanSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBooleanSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
