import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {WalletManagementService} from "../../../../../modules/wallet/service/wallet-management.service";
import {WalletCreatePayload} from "../../../../../modules/wallet/model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

interface IData {
  employeeId: string;
  organizationId: string;
}

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {

  walletForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private walletManagementService: WalletManagementService,
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
  }
}
