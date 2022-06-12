import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletDeleteComponent } from './wallet-delete.component';

describe('WalletDeleteComponent', () => {
  let component: WalletDeleteComponent;
  let fixture: ComponentFixture<WalletDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
