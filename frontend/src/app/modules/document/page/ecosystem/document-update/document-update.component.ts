import { Component, OnInit } from '@angular/core';
import { Document, Documentdto, DocumentUpdatePayload } from "../../../Model";
import { ApiResponse, FormAction } from "@shared/model";
import { DocumentService } from "../../../service/document.service";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { DocumentHelper } from "../../../helper/document.helper";

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.scss']
})
export class DocumentUpdateComponent implements OnInit {
  payload?: DocumentUpdatePayload;
  error?: ApiResponse;
  formAction: FormAction = FormAction.UPDATE;
  lastUpdate = new Date();

  constructor(public documentService: DocumentService, public activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouter.params.pipe(
      switchMap((param: Params) => {
        if (param['id']) {
          return this.documentService.getDetail(param['id'])
        }
        return of(DocumentHelper.getEmpty());
      })
    ).subscribe((document: Document) => {
      if (!document.isEmpty) {
        this.payload = DocumentHelper.fromDtoUpdatePayload(DocumentHelper.toDto(document));
      }
    });
  }

}
