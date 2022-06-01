import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {ApiResponse, Toast, ToastType} from '@shared/model';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  toaster$: Subject<Toast> = new Subject<Toast>();

  constructor() {
  }

  show(type: ToastType, body: string, title?: string, delay?: number) {
    this.toaster$.next({type, title, body, delay});
  }

  showFromApiResponse(response: ApiResponse): void {
    if(response.result){
      this.show(ToastType.SUCCESS, response.code!);
    }else{
      this.show(ToastType.ERROR, response.code!);
    }
  }
}
