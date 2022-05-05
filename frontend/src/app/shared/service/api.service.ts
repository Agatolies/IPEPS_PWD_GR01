import {Injectable} from '@angular/core';
import {HttpService} from '@shared/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:2021/api/';

  constructor(public http: HttpService) {
  }
}
