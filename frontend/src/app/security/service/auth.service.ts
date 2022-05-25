import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { TokenService } from '@security/service/token.service';
import { ApiService, HttpService, NavigationService } from '@shared/service';
import { map } from 'rxjs/operators';
import { RefreshPayload } from '@security/model/payload/refresh.payload';
import { SigninPayload, TokenDto } from '@security/model';
import { SigninResponse } from '@security/model/response/signin.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  isAuthenticated = false;
  profileRole = '';

  constructor(public tokenService: TokenService, public http: HttpService, public navigation: NavigationService) {
    super(http);
  }

  signin(payload: SigninPayload): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}${ApiUriEnum.SIGNIN}`, payload).pipe(
      map((response: ApiResponse) => {
        if (response.result) {
          const signinResponse: SigninResponse = response.data as SigninResponse;
          this.tokenService.saveToken(signinResponse.token.access_token);
          this.tokenService.saveRefreshToken(signinResponse.token.refresh_token);
          this.isAuthenticated = true;
          this.navigation.navigateToSecure();
        }
        return response;
      })
    )
  }

  me(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.ME}`);
  }

  signup(): Observable<ApiResponse> {
    return of({result: true, data: null, error_code: null})
  }

  refreshToken(refresh: RefreshPayload): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}${ApiUriEnum.REFRESH_TOKEN}`, refresh).pipe(
      map((response: ApiResponse) => {
        if (response.result) {
          const tokenResponse: TokenDto = response.data as TokenDto;
          this.tokenService.saveToken(tokenResponse.access_token);
          this.tokenService.saveRefreshToken(tokenResponse.refresh_token);
          this.isAuthenticated = true;
        }
        return response;
      })
    )
  }

  logout(): void {
    this.tokenService.signOut();
    this.isAuthenticated = false;
    this.navigation.navigateToUnsecure();
  }
}
