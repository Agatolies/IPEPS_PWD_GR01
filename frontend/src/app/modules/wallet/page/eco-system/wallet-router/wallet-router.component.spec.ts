import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletRouterComponent } from './wallet-router.component';

describe('WalletRouterComponent', () => {
  let component: WalletRouterComponent;
  let fixture: ComponentFixture<WalletRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
