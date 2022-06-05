import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDeletedComponent } from './transaction-deleted.component';

describe('TransactionDeletedComponent', () => {
  let component: TransactionDeletedComponent;
  let fixture: ComponentFixture<TransactionDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionDeletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
