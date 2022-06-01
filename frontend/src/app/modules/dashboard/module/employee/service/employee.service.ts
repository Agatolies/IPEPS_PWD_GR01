import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Employee } from '@dashboard/module/employee/model/business/employee';
import { employeesFake } from '@dashboard/module/employee/service/employees.fake';
import { ApiResponse, ApiUriEnum, MenuActionType, Page } from '@shared/model';
import { EmployeeHelper } from '@employee/helper/employee.helper';
import { EmployeeDto } from '@employee/model/dto';
import { EmployeeCreatePayload, EmployeeSearchPayload } from '@employee/model/payload';
import { CommonHelperUtils } from '@shared/helper';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService {
  // Planning list from api
  list$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);
  pagination$: BehaviorSubject<Page> = new BehaviorSubject<Page>(CommonHelperUtils.defaultPagination());
  currentAction$: BehaviorSubject<MenuActionType> = new BehaviorSubject<MenuActionType>(MenuActionType.LIST);

  public getList(deleted: boolean = true, search: EmployeeSearchPayload= {}): void {
    this.post(deleted ? ApiUriEnum.EMPLOYEE_DELETED_LIST : ApiUriEnum.EMPLOYEE_LIST, search, false).pipe(tap((response: ApiResponse) => {
      console.log(response)
      if (response.result) {
        this.list$.next((response.data!.content as EmployeeDto[]).map((dto: EmployeeDto) => EmployeeHelper.fromDto(dto)))
        this.pagination$.next(CommonHelperUtils.paginationFromList(response.data!));
      } else {
        this.list$.next([]);
      }
    })).subscribe();
  }

  public getDetail(id: string): Observable<ApiResponse> {
    return this.get(`${ApiUriEnum.EMPLOYEE_DETAIL}${id}`);
  }

  public create(payload: EmployeeCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.EMPLOYEE_CREATE, payload);
  }

  public update(payload: EmployeeCreatePayload): Observable<ApiResponse> {
    return this.put(ApiUriEnum.EMPLOYEE_UPDATE, payload);
  }

  public softdelete(id: string): Observable<ApiResponse> {
    return this.put(`${ApiUriEnum.EMPLOYEE_SOFTDELETE}${id}`, {});
  }

  public rollbackdelete(id: string): Observable<ApiResponse> {
    return this.put(`${ApiUriEnum.EMPLOYEE_ROLLBACK}${id}`, {});
  }

  public erase(id: string): Observable<ApiResponse> {
    return this.delete(`${ApiUriEnum.EMPLOYEE_ERASE}${id}`);
  }

  public fakeListData(): void {
    this.list$.next(employeesFake)
  }
}
