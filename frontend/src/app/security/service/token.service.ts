import {Injectable} from '@angular/core';
import {REFRESHTOKEN_KEY, TOKEN_KEY} from '@shared/model/constant';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private localStorage = window.localStorage;
  constructor() {}

  signOut(): void {
    this.localStorage.clear();
  }

  public saveToken(token: string): void {
    this.localStorage.removeItem(TOKEN_KEY);
    this.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return this.localStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    this.localStorage.removeItem(REFRESHTOKEN_KEY);
    this.localStorage.setItem(REFRESHTOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return this.localStorage.getItem(REFRESHTOKEN_KEY);
  }
}
