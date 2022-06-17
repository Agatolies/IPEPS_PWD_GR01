import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiResponse, ApiUriEnum} from "@shared/model";
import {map, tap} from "rxjs/operators";
import {WalletDto} from "../model";
import {Observable, of} from "rxjs";
import {SalaryDto} from "../../salary/model";
import {TransactionDto} from "../../transaction/model";

@Injectable({
  providedIn: 'root'
})
export class WalletManagementService {
  baseUrl = 'http://localhost:2021/api/';
  tempToken = '7ad098dc-abb6-4f7e-bea3-b6a010bc7b9f';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tempToken}`
    }),
  };

  constructor(private http: HttpClient) {
  }

  public getWalletsByUserId(userId: string): Observable<WalletDto[]> {
    return this.http
      .get<ApiResponse>(`${this.baseUrl}${ApiUriEnum.WALLET_LIST}`)
      .pipe(
        map(response => {
          console.log(response);

          return response.result
            ? response.data as WalletDto[]
            : [];
        })
      )
  }

  // public getSalariesByUserId(userId: String): Observable<SalaryDto[]> {
  //   return this.http
  //     .get<ApiResponse>(`${this.baseUrl}${ApiUriEnum.SALARY_LIST}`)
  //     .pipe(
  //       map(response => {
  //         console.log(response);
  //
  //         return response.result
  //           ? response.data as SalaryDto[]
  //           : [];
  //       })
  //     )
  // }

  public getTransactionsByUserId(userId: String): Observable<TransactionDto[]> {
    return this.http
      .get<ApiResponse>(`${this.baseUrl}${ApiUriEnum.TRANSACTION_LIST}`)
      .pipe(
        map(response => {
          console.log(response);

          return response.result
            ? response.data as TransactionDto[]
            : [];
        })
      )
  }
}
