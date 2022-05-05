import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, finalize} from 'rxjs/operators';
import {ApiResponse, PayloadInterface} from '@shared/model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  loadingEmitter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  public errorHandler(error: { error: { message: any; }; status: any; message: any; }): Observable<ApiResponse> {
    if (error.error instanceof ErrorEvent) {
      return throwError(error.error.message);
    } else {
      return throwError(`Error Code: ${error.status}\nMessage: ${error.message}`);
    }
  }

  public get(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError((error: { error: { message: any; }; status: any; message: any; }) => {
        return this.errorHandler(error);
      }),
      finalize(() => {
        this.loadingEmitter.next(false);
      })
    );
  }

  public post(url: string, data: PayloadInterface): Observable<any> {
    this.loadingEmitter.next(true);
    return this.http.post(url, data).pipe(
      catchError((error: { error: { message: any; }; status: any; message: any; }) => {
        return this.errorHandler(error);
      }),
      finalize(() => {
        this.loadingEmitter.next(false);
      })
    );
  }

  public put(url: string, data: PayloadInterface): Observable<any> {
    this.loadingEmitter.next(true);
    return this.http.put(url, data).pipe(
      catchError((error: { error: { message: any; }; status: any; message: any; }) => {
        return this.errorHandler(error);
      }),
      finalize(() => {
        this.loadingEmitter.next(false);
      })
    );
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url).pipe(
      catchError((error: { error: { message: any; }; status: any; message: any; }) => {
        return this.errorHandler(error);
      }),
      finalize(() => {
        this.loadingEmitter.next(false);
      })
    );
  }
}
