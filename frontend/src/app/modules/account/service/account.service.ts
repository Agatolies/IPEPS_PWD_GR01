import { Injectable } from '@angular/core';
import {ApiService, HttpService} from "@shared/service";
import {Observable} from "rxjs";
import {ApiResponse, PayloadInterface} from "@shared/model";
import {AccountCreatePayload, AccountDto, AccountUpdatePayload, Account} from "@account/model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ApiService{

  constructor(public http:HttpService) {
    super(http);
  }

  public getList(): Observable<Account[]> {
    return this.get('person/list').pipe(map((response: ApiResponse) => {
      return (response.result) ? [] :
        (response.data as AccountDto[]).map((transforme: AccountDto) => {
          return {
            id: transforme.account_id,
            firstname: transforme.firstname,
            lastname: transforme.lastname
          };
        })
    }));
  }

  public getDetail(id : string): Observable<AccountDto>{
    return this.get('account/detail/'+id)
      .pipe(map((response: ApiResponse) => response.data as AccountDto));
  }

  public update(payload: AccountUpdatePayload): Observable<ApiResponse>{
    return this.put('account/update', payload)
  }

  public create(payload: AccountCreatePayload): Observable<ApiResponse>{
    return this.post('account/create', payload)
  }

  public deleted(id : string): Observable<AccountDto> {
    return this.delete('account/delete/'+id)
      .pipe(map((response: ApiResponse) => response.data as AccountDto));
  }
}
