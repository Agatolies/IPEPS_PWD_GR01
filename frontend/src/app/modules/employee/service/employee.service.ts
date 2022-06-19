import {Injectable} from '@angular/core';
import {ApiService, HttpService} from "@shared/service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ApiResponse, ApiUriEnum} from "@shared/model";
import {EmployeeCreatePayload, EmployeeDto, EmployeeUpdatePayload} from "@employee/model";
import * as _ from "lodash";

// Déplacer cette interface dans les modèles du module Employee
export interface EmployeeForDropdown {
  employeeId: string;
  employeeFullName: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService{

  constructor(public http:HttpService) {
    super(http);
  }

  public getListForDropdown(ownerWalletId: string): Observable<EmployeeForDropdown[]> {
    return super
      .get(ApiUriEnum.EMPLOYEE_LIST)
      .pipe(
        map(response => {

          const employeesDto = _.filter(
            response.data as EmployeeDto[],
            (o) => o.wallets.length > 0 && !_.some(o.wallets, { 'wallet_id': ownerWalletId}));

          const employeesForDropdown: EmployeeForDropdown[] = employeesDto
            .map(employeeDto => {
              const firstname = employeeDto.account?.firstname;
              const lastname = employeeDto.account?.lastname;

              return {
                employeeId: employeeDto.employee_id,
                employeeFullName: `${firstname} ${lastname}`
              };
            });

          return employeesForDropdown;
        })
      )
  }

  public getDetail(id : string): Observable<EmployeeDto>{
    return this.get(`${ApiUriEnum.EMPLOYEE_DETAIL}${id}`)
      .pipe(map((response: ApiResponse) => response.data as EmployeeDto));
  }

  public update(payload: EmployeeUpdatePayload): Observable<ApiResponse>{
    return this.put(ApiUriEnum.EMPLOYEE_UPDATE, payload)
  }

  public create(payload: EmployeeCreatePayload): Observable<ApiResponse>{
    return this.post(ApiUriEnum.EMPLOYEE_CREATE, payload)
  }

  public deleted(id : string): Observable<EmployeeDto> {
    return this.delete(`${ApiUriEnum.EMPLOYEE_DELETE}${id}`)
      .pipe(map((response: ApiResponse) => response.data as EmployeeDto));
  }
}
