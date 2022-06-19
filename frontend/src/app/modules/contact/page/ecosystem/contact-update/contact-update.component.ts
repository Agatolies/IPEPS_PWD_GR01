import { Component, OnInit } from '@angular/core';
import {ContactDto, ContactUpdatePayload} from "../../../model";
import {ApiResponse, FormAction, MenuActionType} from "@shared/model";
import {ContactService} from "../../../service/contact.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {ContactHelper} from "../../../helper/contact.helper";

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.scss']
})
export class ContactUpdateComponent implements OnInit {
  payload?: ContactUpdatePayload;
  error?: ApiResponse;
  formAction:FormAction = FormAction.UPDATE;

  constructor(public contactService: ContactService,
              public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.pipe(
      switchMap((param: Params) => {
        if (param['action']) {
          this.formAction = param['action'];
          //next = envoyer des messages à un observable qui sont ensuite envoyés à tous les abonnés
          this.contactService.currentAction$.next(MenuActionType.ADD);
        } else {
          this.formAction = FormAction.UPDATE;
          this.contactService.currentAction$.next(MenuActionType.UPDATE);
        }
        if (param['id']) {
          return this.contactService.getDetail(param['id'])
        }
        //of = converti en le type de retour en un observable
        return of({result: false, data: null, code: 'page.employee.form.error.not-found', success: false});
      })
    ).subscribe((response: ApiResponse) => {
      if (response.result) {
        this.payload = ContactHelper.fromDtoToUpdatePayload(response.data as ContactDto);
      } else {
        this.error = response;
      }
    });
  }
}
