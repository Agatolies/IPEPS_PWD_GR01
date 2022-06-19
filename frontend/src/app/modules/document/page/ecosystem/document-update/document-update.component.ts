import { Component, Inject, OnInit } from '@angular/core';
import { DocumentUpdatePayload } from "../../../Model";
import { ApiResponse, FormAction } from "@shared/model";
import { DocumentService } from "../../../service/document.service";
import { ActivatedRoute } from "@angular/router";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


interface IData {
  payload: DocumentUpdatePayload
}

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.scss']
})
export class DocumentUpdateComponent implements OnInit {
  error?: ApiResponse;
  formAction: FormAction = FormAction.UPDATE;
  lastUpdate = new Date();

  constructor(public documentService: DocumentService, public activatedRouter: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: IData) {
  }

  ngOnInit(): void {
    console.log('data', this.data);
    /*this.activatedRouter.params.pipe(
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
    });*/
  }

}
