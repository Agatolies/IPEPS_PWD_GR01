import { Component, OnInit } from '@angular/core';
import {DocumentFormComponent} from "../../../compoment/document-form/document-form.component";
import {DocumentCreatePayload} from "../../../Model";
import {DocumentHelper} from "../../../helper/document.helper";
import {DocumentService} from "../../../service/document.service";
import {FormAction} from "@shared/module/forms/model";
import {MenuActionType} from "@shared/model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.scss']
})
export class DocumentCreateComponent implements OnInit {

  payload: DocumentCreatePayload = DocumentHelper.getCreatePayload();
  formAction = FormAction;

  constructor(public documentService: DocumentService) {
  }

  ngOnInit(): void {
    this.documentService.currentAction$.next(MenuActionType.ADD);

  }
}
