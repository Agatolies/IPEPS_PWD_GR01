import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletMenuComponent } from './wallet-menu.component';

describe('WalletMenuComponent', () => {
  let component: WalletMenuComponent;
  let fixture: ComponentFixture<WalletMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
