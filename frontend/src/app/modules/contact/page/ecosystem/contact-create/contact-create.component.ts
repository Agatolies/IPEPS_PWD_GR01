import {Component, OnInit} from '@angular/core';
import {ContactCreatePayload} from "../../../model";
import {ContactHelper} from "../../../helper/contact.helper";
import {ContactService} from "../../../service/contact.service";
import {FormAction, MenuActionType} from "@shared/model";


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {
  payload: ContactCreatePayload = ContactHelper.getCreatePayload();
  formAction=FormAction
  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.currentAction$.next(MenuActionType.ADD);
  }

}
