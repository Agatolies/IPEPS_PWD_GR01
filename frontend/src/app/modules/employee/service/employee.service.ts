import { Injectable } from '@angular/core';
import {ApiService, HttpService} from "@shared/service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ApiResponse, PayloadInterface} from "@shared/model";
import {EmployeeCreatePayload, EmployeeDto, EmployeeUpdatePayload, Employee} from "@employee/model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService{

  constructor(public http:HttpService) {
    super(http);
  }

  public getList(): Observable<Employee[]> {
    return this.get('person/list').pipe(map((response: ApiResponse) => {
      return (response.result) ? [] :
        (response.data as EmployeeDto[]).map((transforme: EmployeeDto) => {
          return {
            id: transforme.employee_id,
            role: transforme.role,
            actif: transforme.actif,
            organization:
              {
                id:transforme.organization.organization_id,
                name: transforme.organization.name,
                description: transforme.organization.description,
                actif: transforme.organization.actif
              },
            account:
              {
                id: transforme.account.account_id,
                firstname: transforme.account.firstname,
                lastname: transforme.account.lastname
              }
          };
        })
    }));
  }

  public getDetail(id : string): Observable<EmployeeDto>{
    return this.get('Employee/detail/'+id)
      .pipe(map((response: ApiResponse) => response.data as EmployeeDto));
  }

  public update(payload: EmployeeUpdatePayload): Observable<ApiResponse>{
    return this.put('Employee/update', payload)
  }

  public create(payload: EmployeeCreatePayload): Observable<ApiResponse>{
    return this.post('Employee/create', payload)
  }

  public deleted(id : string): Observable<EmployeeDto> {
    return this.delete('Employee/delete/'+id)
      .pipe(map((response: ApiResponse) => response.data as EmployeeDto));
  }
}
