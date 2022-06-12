import { Injectable} from "@angular/core";
import { ApiService} from "@shared/service";
import {BehaviorSubject, Observable} from "rxjs";
import { Page} from "@shared/module/data-list/model";
import {CommonHelperUtils} from "@shared/helper/common-helper.utils";
import {DocumentCreatePayload, DocumentUpdatePayload} from "../Model";
import {ApiResponse, AppUriEnum, MenuActionType} from "@shared/model";

@Injectable({
  providedIn: 'root'
})

export class DocumentService extends ApiService {
  list$: BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]);
  pagination$: BehaviorSubject<Page> = new BehaviorSubject<Page>(CommonHelperUtils.defaultPagination())
  currentAction$: BehaviorSubject<MenuActionType> = new BehaviorSubject<MenuActionType>(MenuActionType.ADD);


  public create(payload: DocumentCreatePayload): Observable<ApiResponse> {
    // TODO: remplace AppUriEnum par ApiUriEnum
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
