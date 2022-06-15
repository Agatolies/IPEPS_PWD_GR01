import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletFormComponent } from './component/wallet-form/wallet-form.component';
import { WalletMenuComponent } from './component/wallet-menu/wallet-menu.component';
import { WalletCreateComponent } from './page/eco-system/wallet-create/wallet-create.component';
import { WalletDeleteComponent } from './page/eco-system/wallet-delete/wallet-delete.component';
import { WalletDetailComponent } from './page/eco-system/wallet-detail/wallet-detail.component';
import { WalletHomeComponent } from './page/eco-system/wallet-home/wallet-home.component';
import { WalletRouterComponent } from './page/eco-system/wallet-router/wallet-router.component';
import { WalletUpdateComponent } from './page/eco-system/wallet-update/wallet-update.component';
import {SharedModule} from "@shared/shared.module";
import { WalletCardComponent } from './component/wallet-card/wallet-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  declarations: [
    WalletFormComponent,
    WalletMenuComponent,
    WalletCreateComponent,
    WalletDeleteComponent,
    WalletDetailComponent,
    WalletHomeComponent,
    WalletRouterComponent,
    WalletUpdateComponent,
    WalletCardComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    SharedModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class WalletModule { }
