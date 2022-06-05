import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletFormComponent } from './component/wallet-form/wallet-form.component';
import { WalletMenuComponent } from './compobent/wallet-menu/wallet-menu.component';


@NgModule({
  declarations: [
    WalletFormComponent,
    WalletMenuComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
