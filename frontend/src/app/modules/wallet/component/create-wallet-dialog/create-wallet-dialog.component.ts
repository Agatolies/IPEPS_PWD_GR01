import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {WalletManagementService} from "../../service/wallet-management.service";
import {WalletCreatePayload} from "../../model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

interface IData {
  employeeId: string;
  organizationId: string;
}

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-wallet-dialog.component.html',
  styleUrls: ['./create-wallet-dialog.component.scss']
})
export class CreateWalletDialogComponent implements OnInit {

  walletForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private walletManagementService: WalletManagementService,
    // public dialogRef: MatDialogRef<CreateWalletDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IData
  ) { }

  ngOnInit(): void {
    this.walletForm = this.formBuilder.group({
      walletName: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      activity: [true, Validators.required]
    })
  }

  onAddWallet() {

    const payload: WalletCreatePayload = {
      name: this.walletForm.value.walletName,
      type: this.walletForm.value.type,
      actif: this.walletForm.value.activity,
      description: this.walletForm.value.description,
      // employeeId: this.data.employeeId,
      // organizationId: this.data.organizationId
      ...this.data
    }
    console.log(payload)

    this.walletManagementService
      .createWallet(payload)
      .subscribe();
  //
  //     (() => this.closeDialog());
  // }
  //
  // closeDialog() {
  //   this.dialogRef.close();
  }
}
