import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiResponse, ApiResponseGeneric, ApiUriEnum} from "@shared/model";
import {filter, map, tap} from "rxjs/operators";
import {TransactionCreatePayload, WalletCreatePayload, WalletDto} from "../model";
import {Observable, of} from "rxjs";
import {SalaryDto} from "../../salary/model";
import {TransactionDto} from "../model/dto/transaction.dto";
import {ApiService} from "@shared/service";
import {EmployeeDto} from "@employee/model";
import {EmployeeForDropdown} from "@employee/service/employee.service";
import _ from "lodash";


// Déplacer cette interface dans les modèles du module Wallet
export interface WalletForDropdown {
  walletId: string;
  walletName: string;
}

@Injectable({
  providedIn: 'root'
})
export class WalletManagementService extends ApiService {
  public getWalletsByUserId(userId: string): Observable<WalletDto[]> {
    return this.get(ApiUriEnum.WALLET_LIST)
      .pipe(
        map(response => {
          return response.result
            ? response.data as WalletDto[]
            : [];
        })
      )
  }

  public getDetail(id: string): Observable<ApiResponse> {
    return  this.get(`${ApiUriEnum.WALLET_DETAIL}/${id}`);
  }

  public getTransactionsByUserId(userId: String): Observable<TransactionDto[]> {
    return  this.get(ApiUriEnum.TRANSACTION_LIST)
      .pipe(
        map(response => {
          return response.result
            ? response.data as TransactionDto[]
            : [];
        })
      )
  }

  public createWallet(walletCreatePayload: WalletCreatePayload): Observable<WalletDto> {
    return  this.post(ApiUriEnum.WALLET_CREATE, walletCreatePayload)
      .pipe(
        filter((response): response is ApiResponseGeneric<WalletDto> => !!response),
        map(response => {
          return response.data!;
        })
      );
  }

  public createTransaction(transactionCreatePayload: TransactionCreatePayload) : Observable<TransactionDto> {
    return  this.post(ApiUriEnum.TRANSACTION_CREATE, transactionCreatePayload)
      .pipe(
        filter((response): response is ApiResponseGeneric<TransactionDto> => !!response),
        map(response => {
          return response.data!;
        })
      )
  }

  public deleteWallet(walletId: string): Observable<any> {
    return  this.delete(`${ApiUriEnum.WALLET_DELETE}/${walletId}`);
  }

  getListForDropdown(employeeId: string): Observable<WalletForDropdown[]> {
    return  this.get(`${ApiUriEnum.EMPLOYEE_DETAIL}/${employeeId}`)
      .pipe(
        map(response => {

          const employeeDto = response.data as EmployeeDto;

          const walletsForDropdown: WalletForDropdown[] = employeeDto.wallets
            .map(walletDto => {
              return {
                walletId: walletDto.wallet_id,
                walletName: walletDto.name
              };
            });

          return walletsForDropdown;
        })
      )
  }

  public getListOfTransactionForDropdown(): Observable<TransactionDto[]> {
    return this.get(ApiUriEnum.TRANSACTION_LIST)
      .pipe(map(response => response.data as TransactionDto[])
      )
  }

}
