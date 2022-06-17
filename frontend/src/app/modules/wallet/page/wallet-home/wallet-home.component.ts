import {Component, OnDestroy, OnInit} from '@angular/core';
import {WalletDto} from "../../model";
import {BehaviorSubject, combineLatest, Observable, Subscription} from "rxjs";
import {WalletManagementService} from "../../service/wallet-management.service";
import {EmployeeService} from "@employee/service/employee.service";
import {AuthService} from "@security/service/auth.service";
import {AccountService} from "@account/service/account.service";
import {mergeMap} from "rxjs/operators";
import {AccountDto} from "@account/model";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateWalletDialogComponent} from "../../component/create-wallet-dialog/create-wallet-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TransactionDto} from "../../model/dto/transaction.dto";

@Component({
  selector: 'app-wallet-home',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.scss']
})
export class WalletHomeComponent implements OnInit, OnDestroy {
  myWallets: WalletDto[] = [];
  me?: AccountDto;
  subscription: Subscription | undefined;
  selectedWalletIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  isDebug: boolean = true;
  accountId: string = '';

  displayedColumns: string[] = ['id', 'type', 'amount'];
  myTransactions: TransactionDto[] = [];
  private employeeId?: string;
  private organizationId?: string;
  private dialogRef?: MatDialogRef<CreateWalletDialogComponent, any>;

  constructor(
    private auth: AuthService,
    private walletManagement: WalletManagementService,
    private employeeService: EmployeeService,
    private accountService: AccountService,
    private dialog : MatDialog,
    private snackBar: MatSnackBar)
  {
  }

  ngOnInit(): void {
    this.loadWallets();
  }

  ngOnDestroy(): void {
    if (!this.subscription?.closed) {
      this.subscription?.unsubscribe();
    }

    if (!this.selectedWalletIndex$.closed) {
      this.selectedWalletIndex$.unsubscribe();
    }
  }

  private loadWallets(){
    const accountDto$: Observable<AccountDto> = this.auth
      .me()
      .pipe(
        mergeMap(meResponse => {
          const accountId = meResponse.data.credential_id;
          return this.accountService.getDetail(accountId);
        })
      );

    this.subscription = combineLatest([accountDto$, this.selectedWalletIndex$])
      .subscribe(combined => {
        const accountDto = combined[0];
        const walletIndex = combined[1];

        this.me = accountDto;

        const employeeCount = accountDto.employees.length;

        if (employeeCount === 0) {
          this.myWallets = [];
          this.myTransactions = [];
        } else {
          const employee = accountDto.employees[0];

          this.myWallets = employee.wallets.filter(wallet => wallet.actif);
          this.myTransactions = employee.wallets[walletIndex].transactions;
          this.employeeId = employee.employee_id;
          this.organizationId = employee.organization.organization_id;
        }

        console.log(combined)
      });
  }

  selectTransactionForWallet(walletIndex: number) {
    this.selectedWalletIndex$.next(walletIndex);
  }

  openCreateWalletDialog() {
    // dialogRef = pointeur/ficelle qui permet de manipuler le composant
    this.dialogRef = this.dialog.open(
      CreateWalletDialogComponent,
      {
      width: '30%',
      data: {
        employeeId: this.employeeId,
        organizationId: this.organizationId
      }
    });

    this.dialogRef
      .afterClosed()
      .subscribe(isSuccess => {
        if (isSuccess) {
          this.loadWallets();
          this.snackBar.open('Le portefeuille a été créé')
        } else {
          this.snackBar.open('Une erreur a été rencontrée')
        }
      })
  }

  deleteWallet($walletId: string) {
    this.walletManagement
      .deleteWallet($walletId)
      .subscribe(() => {
        this.loadWallets();
        this.snackBar.open('Le portefeuille a été supprimé');
      });

  }
}
