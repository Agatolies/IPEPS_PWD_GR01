import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionMenuComponent } from './transaction-menu.component';

describe('TransactionMenuComponent', () => {
  let component: TransactionMenuComponent;
  let fixture: ComponentFixture<TransactionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
