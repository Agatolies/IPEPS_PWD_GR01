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

  listForEmployeesDropdown$: Observable<EmployeeForDropdown[]> = this.employeeService.getListForDropdown();
  listForWalletsDropdown$: Observable<WalletForDropdown[]> = this.walletManagementService.getListForDropdown(this.employeeId);

  transactionForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private walletManagementService: WalletManagementService,
    private employeeService: EmployeeService,
    private documentService: DocumentService,
    @Inject(MAT_DIALOG_DATA) public data: ImageData,
  ) { }


  ngOnInit(): void {

    this.listForEmployeesDropdown$ = this.employeeService.getListForDropdown();

    this.transactionForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      walletId: ['', Validators.required],
      amount: [0, Validators.required],
      document: ['', Validators.required],

    })
  }

  onAddTransaction() {

    const payload: TransactionCreatePayload = {
      amount: this.transactionForm.value.amount,
      documentId: this.transactionForm.value.document,
      walletFromId: '',
      walletToId:''
    }
    console.log(payload)

    this.walletManagementService
      .createTransaction(payload)
      .subscribe();
  }

  refreshEmployeeWallets($event: MatSelectChange) {

    this.employeeId = $event.value;
    console.log($event.value);
    this.listForWalletsDropdown$ = this.walletManagementService.getListForDropdown(this.employeeId);
  }
}
