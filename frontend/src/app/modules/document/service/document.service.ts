import { Injectable} from "@angular/core";
import {ApiService, HttpService} from "@shared/service";
import {BehaviorSubject, Observable} from "rxjs";
import { Page} from "@shared/module/data-list/model";
import {CommonHelperUtils} from "@shared/helper/common-helper.utils";
import {DocumentCreatePayload, DocumentUpdatePayload} from "../Model";
import {ApiResponse, ApiUriEnum, MenuActionType} from "@shared/model";
import {AuthService} from "@security/service/auth.service";
import {WalletManagementService} from "../../wallet/service/wallet-management.service";
import {EmployeeService} from "@employee/service/employee.service";
import {AccountService} from "@account/service/account.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class DocumentService extends ApiService {
  list$: BehaviorSubject<Document[]> = new BehaviorSubject<Document[]>([]);
  pagination$: BehaviorSubject<Page> = new BehaviorSubject<Page>(CommonHelperUtils.defaultPagination())
  currentAction$: BehaviorSubject<MenuActionType> = new BehaviorSubject<MenuActionType>(MenuActionType.ADD);

  public create(payload: DocumentCreatePayload): Observable<ApiResponse> {
    console.log('mon payload', payload);
    return super.post(ApiUriEnum.DOCUMENT_CREATE, payload);
  }

  public update(payload: DocumentUpdatePayload): Observable<ApiResponse> {
    return super.put(ApiUriEnum.DOCUMENT_UPDATE, payload);
  }

  public getDetail(id : string): Observable<ApiResponse> {
    return super.get(`${ApiUriEnum.DOCUMENT_DETAIL}/${id}`);
  }

  public delete(id: string): Observable<ApiResponse> {
    return super.delete(`${ApiUriEnum.DOCUMENT_DELETE}/${id}`, true);
  }

  public getList(): Observable<ApiResponse> {
    return super.get('document/list');
  }

}
