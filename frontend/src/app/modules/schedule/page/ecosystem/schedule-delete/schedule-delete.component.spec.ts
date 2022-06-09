import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDeleteComponent } from './schedule-delete.component';

describe('ScheduleDeleteComponent', () => {
  let component: ScheduleDeleteComponent;
  let fixture: ComponentFixture<ScheduleDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
