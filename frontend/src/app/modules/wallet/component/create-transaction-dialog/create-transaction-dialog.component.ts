import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {WalletForDropdown, WalletManagementService} from "../../service/wallet-management.service";
import {TransactionCreatePayload} from "../../model";
import {EmployeeForDropdown, EmployeeService} from "@employee/service/employee.service";
import {DocumentService} from "../../../document/service/document.service";
import {Observable} from "rxjs";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-create-transaction-dialog',
  templateUrl: './create-transaction-dialog.component.html',
  styleUrls: ['./create-transaction-dialog.component.scss']
})
export class CreateTransactionDialogComponent implements OnInit {

  private employeeId: string = '';

  listForEmployeesDropdown$!: Observable<EmployeeForDropdown[]>;
  listForWalletsDropdown$!: Observable<WalletForDropdown[]>;

  transactionForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private walletManagementService: WalletManagementService,
    private employeeService: EmployeeService,
    private documentService: DocumentService,
    @Inject(MAT_DIALOG_DATA) public data: { walletFromId: string },
  ) { }


  ngOnInit(): void {

    this.listForEmployeesDropdown$ = this.employeeService.getListForDropdown(this.data.walletFromId);
    this.listForWalletsDropdown$ = this.walletManagementService.getListForDropdown(this.employeeId);

    this.transactionForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      walletId: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(0.01)]],
    })
  }

  onAddTransaction() {

    const payload: TransactionCreatePayload = {
      amount: this.transactionForm.value.amount,
      documentId: this.transactionForm.value.document,
      walletFromId: this.data.walletFromId,
      walletToId: this.transactionForm.value.walletId
    }
    console.log(payload)

    this.walletManagementService
      .createTransaction(payload)
      .subscribe(() => {
        // recharge la page pour actualiser la liste des transactions
        window.location.reload()
      });
  }

  reloadEmployeeWallets($event: MatSelectChange) {

    this.employeeId = $event.value;
    console.log($event.value);
    this.listForWalletsDropdown$ = this.walletManagementService.getListForDropdown(this.employeeId);
  }
}
