import {Component, Input, OnInit} from '@angular/core';
import {WalletDto} from "../../model";

@Component({
  selector: 'app-wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.scss']
})
export class WalletCardComponent implements OnInit {
  @Input() wallet: WalletDto | undefined;

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

}
