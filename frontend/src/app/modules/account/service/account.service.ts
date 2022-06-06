import { Injectable } from '@angular/core';
import {ApiService, HttpService} from "@shared/service";
import {Observable} from "rxjs";
import {ApiResponse, PayloadInterface} from "@shared/model";
import {AccountCreatePayload, AccountUpdatePayload} from "@account/model";

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ApiService{

  constructor(public http:HttpService) {
    super(http);
  }

  getList():Observable<ApiResponse>{
    return this.get('account/list')
  }

  getDetail(payload: PayloadInterface): Observable<ApiResponse>{
    return this.get('account/detail/'+payload.id)
  }

  update(payload: AccountUpdatePayload): Observable<ApiResponse>{
    return this.put('account/update', payload)
  }

  create(payload: AccountCreatePayload): Observable<ApiResponse>{
    return this.post('account/create', payload)
  }
/*
  delete(payload: PayloadInterface): Observable<ApiResponse> {
    return this.delete('account/delete/'+payload.id);
  }*/
}
