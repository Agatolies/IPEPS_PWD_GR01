import { Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {
  CreateTransactionDialogComponent
} from "../../component/create-transaction-dialog/create-transaction-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";
import {WalletManagementService} from "../../service/wallet-management.service";
import {WalletDto} from "../../model";
import {IS_DEBUG} from "@shared/model"

@Component({
  selector: 'app-wallet-detail',
  templateUrl: './wallet-detail.component.html',
  styleUrls: ['./wallet-detail.component.scss']
})
export class WalletDetailComponent implements OnInit {
  selectedWallet?: WalletDto;

  isDebug: boolean = IS_DEBUG;
  displayedColumns: string[] = ['id', 'type', 'amount'];
  walletId?: string;
  private dialogRef?: MatDialogRef<CreateTransactionDialogComponent, any>;

  constructor(
    private dialog : MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private walletManagement: WalletManagementService)
  {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.walletId = params['walletId'];
      this.loadWalletDetails(this.walletId);
    })
  }

  // TODO
  private loadTransactions() {
  }

  openCreateTransactionDialog() {
    this.dialogRef = this.dialog.open(
      CreateTransactionDialogComponent,
      {
        width: '30%',
        data: {
          walletFromId: this.walletId,
        }
      }
    )

    this.dialogRef
      .afterClosed()
      .subscribe(isSuccess => {
        if (isSuccess) {
          this.loadTransactions();
          this.snackBar.open('La transaction a été créé');
        } else {
          this.snackBar.open('Opération annulée');
        }
      })
  }

  private loadWalletDetails(walletId: string | undefined) {
    if (walletId !== undefined){
      this.walletManagement
        .getDetail(walletId)
        .subscribe(apiResponse => {
          if (apiResponse.success) {
            const wallet: WalletDto = apiResponse.data;
            console.log(wallet.name);
            this.selectedWallet = apiResponse.data;
          }
        });
    }
  }
}

