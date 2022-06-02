import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBtnComponent } from './form-btn.component';

describe('FormBtnComponent', () => {
  let component: FormBtnComponent;
  let fixture: ComponentFixture<FormBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
