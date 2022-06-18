import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WalletDto} from "../../model";
import {AppRouteEnum} from "@shared/module/menu/model";

@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.scss']
})
export class WalletCardComponent implements OnInit {
  @Input() wallet: WalletDto | undefined;
  @Output() deleteWalletEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public getCssCardColor(): string {
    switch (this.wallet?.type) {
      case 'TYPE1':
        return 'wallet-card-red'
      case 'TYPE2':
        return 'wallet-card-blue'
      case 'TYPE3':
        return 'wallet-card-green'
      default:
        return ''
    }
  }

  deleteWallet(): void {
    // = si la variable est définie = différente de null
    if(!!this.wallet) {
      const walletId = this.wallet.wallet_id;
      this.deleteWalletEvent.emit(walletId);
    }
  }

  getDetailRoutes(): string {
    return `${AppRouteEnum.WALLET_DETAIL}/${this.wallet?.wallet_id}`;
  }
}
