import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAreaComponent } from './filter-area.component';

describe('FilterAreaComponent', () => {
  let component: FilterAreaComponent;
  let fixture: ComponentFixture<FilterAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
