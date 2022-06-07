import { Component, OnInit } from '@angular/core';
import {ApiResponse} from "@shared/model";
import {AccountCreatePayload} from "@account/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "@account/service/account.service";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  response?: ApiResponse;
  payload: AccountCreatePayload = {
    firstname: '',
    lastname: ''
  }
  title = 'accountFormGroup';
  // new FormControl(LA_VALEUR_PAR_DEFAUT, [TABLEAU DE VALIDATION])
  payloadFormGroup = new FormGroup({
    firstname: new FormControl(this.payload.firstname, [Validators.required]),
    lastname: new FormControl(this.payload.lastname, [Validators.required])
  })

  constructor(public accountService: AccountService) {}

  save(e: any): void {
    e.preventDefault();
    if (!this.payloadFormGroup.invalid) {
      // ceci remplace les deux lignes commentées
      // ... => copie les propriétés ET leur valeur dans le nouvel objet
      // du coup ce qu'il se passe:
      // 1. [...this.payload]  on recopie payload dans payload
      // 2. [...this.payloadFormGroup.value] ...crée ou remplace les propriétés du second objet

      this.payload = {...this.payload, ...this.payloadFormGroup.value};

      // this.payload.firstname = this.payloadFormGroup.value['firstname'];
      // this.payload.lastname = this.payloadFormGroup.value['lastname'];
      this.accountService.create(this.payload)
        .subscribe((response: ApiResponse) => {
          this.response = response;
        })
    } else {
      alert('Champs rempli de façon incorrecte.');
    }
  }

  ngOnInit(): void {
  }

}
