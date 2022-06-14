import {Component, OnDestroy, OnInit} from '@angular/core';
import {WalletDto} from "../../../model";
import {Subscription} from "rxjs";
import {WalletManagementService} from "../../../service/wallet-management.service";
import {EmployeeService} from "@employee/service/employee.service";
import {AuthService} from "@security/service/auth.service";
import {AccountService} from "@account/service/account.service";
import {mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-wallet-home',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.scss']
})
export class WalletHomeComponent implements OnInit, OnDestroy {
  myWallets: WalletDto[] = [];
  me: any = '';
  subscription: Subscription | undefined;

  isDebug: boolean = true;
  token: any;
  accountId: string = '';

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
  }

  private loadWallets(){
    // TODO: Recuperer UserId

    this.token = this.auth.tokenService.getToken();


    this.subscription = this.auth
      .me()
      .pipe(
        mergeMap(meResponse => {
          const accountId = meResponse.data.credential_id;
          this.accountId = accountId;
          return this.accountService.getDetail(accountId);
        })
      )
      .subscribe(accountDto => {
        this.me = accountDto;

        const employeeCount = accountDto.employees.length;

        if (employeeCount === 0) {
          this.myWallets = [];
        } else {
          this.myWallets = accountDto.employees[0].wallets
        }
      });

    this.subscription = this.employeeService
      .getDetail('')
      .subscribe(data => {
        this.myWallets = data.wallets
      });
  }

}
