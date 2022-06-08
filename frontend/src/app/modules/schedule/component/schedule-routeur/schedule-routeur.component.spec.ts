import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRouteurComponent } from './schedule-routeur.component';

describe('ScheduleRouteurComponent', () => {
  let component: ScheduleRouteurComponent;
  let fixture: ComponentFixture<ScheduleRouteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleRouteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleRouteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
