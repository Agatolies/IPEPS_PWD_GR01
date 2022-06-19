import { Injectable } from '@angular/core';
import { ApiService, HttpService } from "@shared/service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiResponse, ApiUriEnum } from "@shared/model";
import { Employee, EmployeeCreatePayload, EmployeeDto, EmployeeUpdatePayload } from "@employee/model";
import { EmployeeHelper } from '@employee/helper/employee.helper';

// Déplacer cette interface dans les modèles du module Employee
export interface EmployeeForDropdown {
  employeeId: string;
  employeeFullName: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  public getListOfEmployeeForDropdown(): Observable<EmployeeDto[]> {
    return this.get(ApiUriEnum.EMPLOYEE_LIST)
      .pipe(map(response => response.data as EmployeeDto[])
      )
  }

  public getList(): Observable<Employee[]> {
    return this.get(ApiUriEnum.EMPLOYEE_LIST).pipe(map((response: ApiResponse) => {
      return (response.result) ? [] :
        (response.data as EmployeeDto[]).map((transforme: EmployeeDto) => EmployeeHelper.fromDto(transforme))
    }));
  }

  public getListForDropdown(): Observable<EmployeeForDropdown[]> {
    return super
      .get(ApiUriEnum.EMPLOYEE_LIST)
      .pipe(
        map(response => {

          const employeesDto = response.data as EmployeeDto[];

          const employeesForDropdown: EmployeeForDropdown[] = employeesDto
            .map(employeeDto => {
              // Je prends dans employeeDto.account, firstName et lastName
              const firstname = employeeDto.firstname;
              const lastname = employeeDto.lastname;

              return {
                employeeId: employeeDto.employee_id,
                employeeFullName: `${firstname} ${lastname}`
              };
            });

          return employeesForDropdown;
        })
      )
  }

  public getDetail(id: string): Observable<EmployeeDto> {
    return this.get(`${ApiUriEnum.EMPLOYEE_DETAIL}${id}`)
      .pipe(map((response: ApiResponse) => response.data as EmployeeDto));
  }

  public update(payload: EmployeeUpdatePayload): Observable<ApiResponse> {
    return this.put(ApiUriEnum.EMPLOYEE_UPDATE, payload)
  }

  public create(payload: EmployeeCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.EMPLOYEE_CREATE, payload)
  }

  public deleted(id: string): Observable<EmployeeDto> {
    return this.delete(`${ApiUriEnum.EMPLOYEE_DELETE}${id}`)
      .pipe(map((response: ApiResponse) => response.data as EmployeeDto));
  }
}
