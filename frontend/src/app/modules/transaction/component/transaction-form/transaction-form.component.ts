import {Component, Input, OnInit} from '@angular/core';
import {TransactionDto} from "../../model";

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  @Input() transaction: TransactionDto | undefined;
  myTransactions: TransactionDto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  private loadTransactionsByWalletId() {

  }

}
