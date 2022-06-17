import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletFormComponent } from './component/wallet-form/wallet-form.component';
import { WalletMenuComponent } from './component/wallet-menu/wallet-menu.component';
import { WalletDetailComponent } from './page/wallet-detail/wallet-detail.component';
import { WalletHomeComponent } from './page/wallet-home/wallet-home.component';
import { WalletUpdateComponent } from './page/wallet-update/wallet-update.component';
import {SharedModule} from "@shared/shared.module";
import { WalletCardComponent } from './component/wallet-card/wallet-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CreateWalletDialogComponent} from "./component/create-wallet-dialog/create-wallet-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    WalletFormComponent,
    WalletMenuComponent,
    WalletDetailComponent,
    WalletHomeComponent,
    WalletUpdateComponent,
    WalletCardComponent,
    CreateWalletDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WalletRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class WalletModule { }
