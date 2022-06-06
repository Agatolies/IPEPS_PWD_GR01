import { Injectable} from "@angular/core";
import { ApiService} from "@shared/service";
import {BehaviorSubject, Observable} from "rxjs";
import { Page} from "@shared/module/data-list/model";
import {CommonHelperUtils} from "@shared/helper/common-helper.utils";
import {DocumentCreatePayload, DocumentUpdatePayload} from "../Model";
import {ApiResponse} from "@shared/model";
import {AppUriEnum} from "@shared/model/enum/app-uri.enum";


@Injectable({
  providedIn: 'root'
})

export class DocumentService extends ApiService {
  list$: BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]);
  pagination$: BehaviorSubject<Page> = new BehaviorSubject<Page>(CommonHelperUtils.defaultPagination())

  public create(payload: DocumentCreatePayload): Observable<ApiResponse> {
    return this.post(AppUriEnum.DOCUMENT_CREATE, payload);
  }

  public update(payload: DocumentUpdatePayload): Observable<ApiResponse> {
    return this.put(AppUriEnum.DOCUMENT_UPDATE, payload);
  }

  public getDetail(id : string): Observable<ApiResponse> {
    return this.get(`${AppUriEnum.DOCUMENT_DETAIL}${id}`);
  }

  public delete(id: string): Observable<ApiResponse> {
    return this.delete(`${AppUriEnum.DOCUMENT_DELETE}${id}`);
  }

}
