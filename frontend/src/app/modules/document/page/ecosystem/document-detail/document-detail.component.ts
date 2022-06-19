import { Component, OnInit } from '@angular/core';
import { of, Subject } from "rxjs";
import { DocumentService } from "../../../service/document.service";
import { ActivatedRoute, Params } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";
import { DocumentHelper } from "../../../helper/document.helper";
import { Document } from "../../../Model";
import { ApiResponse } from "@shared/model";
import { isNil } from 'lodash';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {

  public details$: Subject<Document> = new Subject<Document>();
  public erreur?: ApiResponse;

  constructor(public documentService: DocumentService,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap((param: Params) => {
        if (!isNil(param['id'])) {
          return this.documentService.getDetail(param['id'])
        }
        return of(DocumentHelper.getEmpty());

      }),
      tap((document: Document) => this.details$.next(document)))
      .subscribe();
  }

}
