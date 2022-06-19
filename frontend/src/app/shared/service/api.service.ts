import { Injectable } from '@angular/core';
import { HttpService } from '@shared/service/http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponse, ApiStatus, PayloadInterface } from '@shared/model';
import { map } from 'rxjs/operators';
import {DocumentUpdatePayload} from "../../modules/document/Model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:2021/api/'
  status$: BehaviorSubject<ApiStatus> = new BehaviorSubject<ApiStatus>({
    accessible: false,
    title: 'waiting',
    message: 'api.waiting.first-attempt'
  })

  constructor(public http: HttpService) {
  }

  get(partUrl: string): Observable<ApiResponse> {
    return this.http
      .get(`${this.baseUrl}${partUrl}`)
      .pipe(map((response: any) => response as ApiResponse))
  }

  post(partUrl: string, payload: PayloadInterface, showToaster = true): Observable<ApiResponse> {
    return this.http
      .post(`${this.baseUrl}${partUrl}`, payload, showToaster)
      .pipe(map((response: any) => response as ApiResponse))
  }

  put(partUrl: string, payload: PayloadInterface, showToaster = true): Observable<ApiResponse> {
    return this.http
      .put(`${this.baseUrl}${partUrl}`, payload, showToaster)
      .pipe(map((response: any) => response as ApiResponse))
  }

  putGeneric<TPayload>(partUrl: string, payload: TPayload, showToaster = true): Observable<ApiResponse> {
    return this.http
      .put(`${this.baseUrl}${partUrl}`, payload, showToaster)
      .pipe(map((response: any) => response as ApiResponse))
  }

  delete(partUrl: string, showToaster = true): Observable<ApiResponse> {
    return this.http
      .delete(`${this.baseUrl}${partUrl}`, showToaster)
      .pipe(map((response: any) => response as ApiResponse))
  }

}
