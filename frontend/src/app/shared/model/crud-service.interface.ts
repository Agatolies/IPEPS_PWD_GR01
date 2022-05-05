import {Observable} from 'rxjs';
import {PayloadInterface} from './payload.interface';
import {ApiResponse} from './api-response.interface';

export interface CrudServiceInterface {
  list(): void;

  add(addPayload: PayloadInterface): Observable<ApiResponse>;

  update(updatePayload: PayloadInterface): Observable<ApiResponse>;

  delete(id: string | number): Observable<ApiResponse>;
}
