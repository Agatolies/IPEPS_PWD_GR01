import {Component, OnDestroy, OnInit} from '@angular/core';
import {WalletManagementService} from "../../service/wallet-management.service";
import {Subscription} from "rxjs";
import {WalletDto} from "../../model";

@Component({
  selector: 'app-wallet-menu',
  templateUrl: './wallet-menu.component.html',
  styleUrls: ['./wallet-menu.component.scss']
})
export class WalletMenuComponent implements OnInit, OnDestroy {
  myWallets: WalletDto[] = [];
  subscription: Subscription | undefined;

  constructor(private walletManagement: WalletManagementService) {

  }

  ngOnInit(): void {
    this.loadWallets();
  }

  ngOnDestroy(): void {
    if (!this.subscription?.closed) {
      this.subscription?.unsubscribe();
    }
  }

  private loadWallets(){
    this.subscription = this.walletManagement
      .getWalletsByUserId('')
      .subscribe(data => {
        this.myWallets = data;
      });
  }

}
