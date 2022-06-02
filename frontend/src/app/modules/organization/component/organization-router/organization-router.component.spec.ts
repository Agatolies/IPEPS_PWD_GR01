import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationRouterComponent } from './organization-router.component';

describe('OrganizationRouterComponent', () => {
  let component: OrganizationRouterComponent;
  let fixture: ComponentFixture<OrganizationRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
