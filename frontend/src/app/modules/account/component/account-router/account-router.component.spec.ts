import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRouterComponent } from './account-router.component';

describe('AccountRouterComponent', () => {
  let component: AccountRouterComponent;
  let fixture: ComponentFixture<AccountRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
