import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Account} from "@account/model";
import {AccountService} from "@account/service/account.service";

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit {
  list$: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

}
