import {Component, OnDestroy, OnInit} from '@angular/core';
import {WalletDto} from "../../../model";
import {BehaviorSubject, combineLatest, Observable, Subscription} from "rxjs";
import {WalletManagementService} from "../../../service/wallet-management.service";
import {EmployeeService} from "@employee/service/employee.service";
import {AuthService} from "@security/service/auth.service";
import {AccountService} from "@account/service/account.service";
import {mergeMap} from "rxjs/operators";
import {TransactionDto} from "../../../../transaction/model";
import {AccountDto} from "@account/model";

@Component({
  selector: 'app-wallet-home',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.scss']
})
export class WalletHomeComponent implements OnInit, OnDestroy {
  myWallets: WalletDto[] = [];
  me: any = '';
  subscription: Subscription | undefined;
  selectedWalletIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  isDebug: boolean = true;
  accountId: string = '';

  displayedColumns: string[] = ['id', 'type', 'amount'];
  myTransactions: TransactionDto[] = [];


  constructor(
    private auth: AuthService,
    private walletManagement: WalletManagementService,
    private employeeService: EmployeeService,
    private accountService: AccountService) {
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

          this.myWallets = employee.wallets;
          this.myTransactions = employee.wallets[walletIndex].transactions;
        }

        console.log(combined)
      });
  }

  selectTransactionForWallet(walletIndex: number) {
    this.selectedWalletIndex$.next(walletIndex);
  }
}
