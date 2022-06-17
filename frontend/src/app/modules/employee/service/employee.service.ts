import { Injectable } from '@angular/core';
import {ApiService, HttpService} from "@shared/service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ApiResponse, ApiUriEnum} from "@shared/model";
import {EmployeeCreatePayload, EmployeeDto, EmployeeUpdatePayload, Employee} from "@employee/model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService{

  constructor(public http:HttpService) {
    super(http);
  }

  public getList(): Observable<Employee[]> {

  return this.get('person/list')
       .pipe(
         map((response: ApiResponse) => {
           return (response.result)
             ? []
             : (response.data as EmployeeDto[])
               .map((transforme: EmployeeDto) => {
                 return {
                   id: transforme.employee_id,
                   role: transforme.role,
                   actif: transforme.actif,
                   wallets: {
                     id: transforme.wallets.wa,
                     name: transforme.wallets.name,
                   }
                   organization: {
                     id:transforme.organization.organization_id,
                     name: transforme.organization.name,
                     description: transforme.organization.description,
                     actif: transforme.organization.actif,
                   },
                   account: {
                     id: transforme.account.account_id,
                     firstname: transforme.account.firstname,
                     lastname: transforme.account.lastname,
                     employees: transforme.account.employees
                   },
                 };
               })
         }));
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
