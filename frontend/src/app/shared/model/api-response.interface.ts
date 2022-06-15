import {DtoInterface} from '@shared/model';

export interface ApiResponse extends ApiResponseGeneric<any>{
}

export interface ApiResponseGeneric<T> extends DtoInterface{
  result: boolean;
  data: T | null;
  code: string | null;
  success: boolean;
}
