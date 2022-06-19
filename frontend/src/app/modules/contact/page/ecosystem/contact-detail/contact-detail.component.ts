import { Component, OnInit } from '@angular/core';
import {ApiResponse, MenuActionType} from "@shared/model";
import {Contact, ContactDto} from "../../../model";
import {ContactService} from "../../../service/contact.service";
import {ActivatedRoute, Params} from "@angular/router";
import {ContactHelper} from "../../../helper/contact.helper";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  detail?: Contact;
  error?: ApiResponse;

  constructor(public contactService: ContactService,
              public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
      this.contactService.currentAction$.next(MenuActionType.DETAIL);
      this.activatedRouter.params.pipe(
        switchMap((param: Params) => {
          if (param['id']) {
            return this.contactService.getDetail(param['id'])
          }
          return of({result: false, data: null, code: 'page.employee.form.error.not-found', success: false});
        })
      ).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.detail = ContactHelper.fromDto(response.data as ContactDto);
        } else {
          this.error = response;
        }
      });
  }

}
