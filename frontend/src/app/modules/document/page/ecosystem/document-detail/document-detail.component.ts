import {Component, Inject, OnInit} from '@angular/core';
import { of, Subject } from "rxjs";
import { DocumentService } from "../../../service/document.service";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";
import { DocumentHelper } from "../../../helper/document.helper";
import { Document } from "../../../Model";
import { ApiResponse } from "@shared/model";
import { isNil } from 'lodash';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

interface IDataDetail {
  document: Document;
}

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {

  public details$: Subject<Document> = new Subject<Document>();
  public document?: Document;

  constructor(public documentService: DocumentService,
              public activatedRoute: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) public data: IDataDetail) {
  }

  ngOnInit(): void {
    this.document = this.data.document;
    console.log(this.document);
    /*this.documentService
      .getDetail(this.data.document_id)
      .subscribe((document:Document) =>{
        this.document = document;
      });
    this.activatedRoute.params.pipe(
      switchMap((param: Params) => {
        if (!isNil(param['id'])) {
          console.log(param['id']);
          return this.documentService.getDetail(param['id'])
        }
        return of(DocumentHelper.getEmpty());

      }),
      tap((document: Document) => this.details$.next(document)))
      .subscribe();*/
  }

}
