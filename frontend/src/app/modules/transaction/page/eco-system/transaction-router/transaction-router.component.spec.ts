import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRouterComponent } from './transaction-router.component';

describe('TransactionRouterComponent', () => {
  let component: TransactionRouterComponent;
  let fixture: ComponentFixture<TransactionRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
