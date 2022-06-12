import {Component, Input, OnInit} from '@angular/core';
import {AccountUpdatePayload, AccountCreatePayload} from "@account/model/payload";
import {FormAction} from "@shared/model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../service/account.service";
import {NavigationService} from "@shared/service";


@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  @Input() payload!: AccountCreatePayload |AccountUpdatePayload;
  @Input() type!: FormAction;

  formGroup!: FormGroup;
  formGroupAcc!: FormGroup;
  label!: string;

  constructor(public accountService: AccountService, public navigationService: NavigationService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.label = (this.type === FormAction.ADD) ? 'common.form.btn.create' : 'common.form.btn.update';
    this.initFormAcc();
    this.formGroup = new FormGroup({
      firstname: new FormControl(this.payload.firstname),
      lastname: new FormControl(this.payload.lastname)
    });
  }
  initFormAcc(){
    this.formGroupAcc = this.formBuilder.group({
      firstname: '',
      lastname: ''
    });
  }
}
