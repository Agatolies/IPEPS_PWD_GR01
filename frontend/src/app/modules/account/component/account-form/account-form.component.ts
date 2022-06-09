import { Component, OnInit } from '@angular/core';
import {ApiResponse} from "@shared/model";
import {AccountCreatePayload, AccountUpdatePayload} from "@account/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "@account/service/account.service";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})

export class AccountFormComponent implements OnInit {
  response?: ApiResponse;
  payloadCreate: AccountCreatePayload = {
    firstname: '',
    lastname: ''
  }
  payloadUpdate: AccountUpdatePayload = {
    account_id: '',
    firstname: '',
    lastname: ''
  }
  title = 'formGroup';

  payloadFormGroup = new FormGroup({
    firstname: new FormControl(this.payloadCreate.firstname, [Validators.required]),
    lastname: new FormControl(this.payloadCreate.lastname, [Validators.required])
  })

  constructor(public accountService: AccountService) {}

  update(e: any): void {
    e.preventDefault();
    if (!this.payloadFormGroup.invalid) {

      this.payloadUpdate = {...this.payloadUpdate, ...this.payloadFormGroup.value};
      // équivalent des 2 lignes ci dessous, copie les propriétés et les valeurs
      // this.payloadUpdate.firstname = this.payloadFormGroup.value['firstname'];
      // this.payloadUpdate.lastname = this.payloadFormGroup.value['lastname'];
      this.accountService.update(this.payloadUpdate)
        .subscribe((response: ApiResponse) => {
          this.response = response;
        })
    } else {
      alert('Champs remplis de façon incorrecte.');
    }
  }

  save(e: any): void {
    e.preventDefault();
    if (!this.payloadFormGroup.invalid) {
      this.payloadCreate = {...this.payloadCreate, ...this.payloadFormGroup.value};
      this.accountService.create(this.payloadCreate)
        .subscribe((response: ApiResponse) => {
          this.response = response;
        })
    } else {
      alert('Champs remplis de façon incorrecte.');
    }
  }

  ngOnInit(): void {
  }

}
