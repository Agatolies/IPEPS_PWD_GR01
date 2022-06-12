import { TestBed } from '@angular/core/testing';

import { WalletManagementService } from './wallet-management.service';

describe('WalletManagementService', () => {
  let service: WalletManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
