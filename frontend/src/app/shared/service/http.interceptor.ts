import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthService} from '@security/service/auth.service';
import {isNil} from 'lodash';
import {RefreshPayload} from '@security/model';
import {ApiResponse, ApiUriEnum} from '@shared/model';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  attemps = 0;

  constructor(public auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = this.addToken(req);
    return next.handle(cloneReq).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.handleError(err, cloneReq, next)
      })
    )
  }

  private addToken(req: HttpRequest<any>): HttpRequest<any> {
    if (!req.url.includes(ApiUriEnum.SIGNIN) && !req.url.includes(ApiUriEnum.SIGNUP) && !req.url.includes(ApiUriEnum.REFRESH_TOKEN)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.tokenService.getToken()}`
        }
      });
    }
    return req;
  }

  private handleError(err: HttpErrorResponse, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (this.attemps > 1) {
      this.attemps = 0;
      this.auth.navigation.navigateToUnsecure();
      return throwError(err);
    }
    this.attemps++;
    if (err.error.error === 'unauthorized' || err.status === 401) {
      if (isNil(this.auth.tokenService.getRefreshToken())) {
        this.auth.navigation.navigateToUnsecure();
        return throwError(err);
      } else {
        const refreshPayload: RefreshPayload = {
          refresh: this.auth.tokenService.getRefreshToken()!
        }
        return this.auth.refreshToken(refreshPayload).pipe(switchMap((response: ApiResponse) => {
          if (!response.result) {
            return throwError(err);
          }
          const cloneReq = this.addToken(req);
          return next.handle(cloneReq).pipe(
            catchError((err: HttpErrorResponse) => {
              return this.handleError(err, req, next)
            })
          )
        }));
      }
    }
    return throwError(err);
  }
}
