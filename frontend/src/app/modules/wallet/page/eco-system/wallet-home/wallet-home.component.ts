import {Component, OnDestroy, OnInit} from '@angular/core';
import {WalletDto} from "../../../model";
import {Subscription} from "rxjs";
import {WalletManagementService} from "../../../service/wallet-management.service";

@Component({
  selector: 'app-wallet-home',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.scss']
})
export class WalletHomeComponent implements OnInit, OnDestroy {
  myWallets: WalletDto[] = [];
  subscription: Subscription | undefined;

  isDebug: boolean = false;

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
