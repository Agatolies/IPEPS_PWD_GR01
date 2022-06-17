import { Component, OnInit } from '@angular/core';
import {of, Subject} from "rxjs";
import {DocumentService} from "../../../service/document.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {DocumentHelper} from "../../../helper/document.helper";
import {Documentdto} from "../../../Model";
import {Document} from "../../../Model";
import {ApiResponse} from "@shared/model";

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
        if (param) {
          return this.documentService.getDetail(param['id'])
        }
        else {
          const apiResponse: ApiResponse = {
            result: false,
            data: null,
            code:'page.document.form.error.not-found',
            success: false
          }
          return of(apiResponse);
        }
      }))
      .subscribe((response) => {
        if(response.result){
          this.details$.next(DocumentHelper.fromDTO(response.data as Documentdto));
        }
        else {
          this.erreur = response;
        }
      });
  }

}
