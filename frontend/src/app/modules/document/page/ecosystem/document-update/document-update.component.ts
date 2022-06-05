import {Component, OnInit} from '@angular/core';
import {Documentdto, DocumentUpdatePayload} from "../../../Model";
import {ApiResponse, FormAction} from "@shared/model";
import {DocumentService} from "../../../service/document.service";
import {ActivatedRoute, Params} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {DocumentHelper} from "../../../helper/document.helper";

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.scss']
})
export class DocumentUpdateComponent implements OnInit {
  payload?: DocumentUpdatePayload;
  error?: ApiResponse;
  formAction:FormAction = FormAction.UPDATE;

  constructor(public documentService: DocumentService, public activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouter.params.pipe(
      switchMap((param: Params) => {
        if (param['id']){
          return this.documentService.getDetail(param['id'])
        }
        return of({result: false, data: null, code:'page.document.form.error.not-found'});
      })
    ).subscribe((response: ApiResponse) => {
      if (response.result){
        this.payload = DocumentHelper.fromDtoUpdatePayload(response.data as Documentdto)
      }
      esle {
        this.error = response;      }
    });
  }

}
