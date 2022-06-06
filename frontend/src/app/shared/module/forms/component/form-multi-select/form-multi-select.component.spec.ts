import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMultiSelectComponent } from './form-multi-select.component';

describe('FormMultiSelectComponent', () => {
  let component: FormMultiSelectComponent;
  let fixture: ComponentFixture<FormMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMultiSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
