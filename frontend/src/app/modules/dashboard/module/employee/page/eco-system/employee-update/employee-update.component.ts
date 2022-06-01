import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '@employee/service/employee.service';
import { ApiResponse, FormAction, MenuActionType } from '@shared/model';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EmployeeUpdatePayload } from '@employee/model/payload';
import { EmployeeHelper } from '@employee/helper/employee.helper';
import { EmployeeDto } from '@employee/model/dto';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  payload?: EmployeeUpdatePayload;
  error?: ApiResponse;
  formAction:FormAction = FormAction.UPDATE;

  constructor(public employeeService: EmployeeService, public activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRouter.params.pipe(
      switchMap((param: Params) => {
        if (param['action']) {
          this.formAction = param['action'];
          this.employeeService.currentAction$.next(MenuActionType.ADD);
        } else {
          this.formAction = FormAction.UPDATE;
          this.employeeService.currentAction$.next(MenuActionType.UPDATE);
        }
        if (param['id']) {
          return this.employeeService.getDetail(param['id'])
        }
        return of({result: false, data: null, code: 'page.employee.form.error.not-found'});
      })
    ).subscribe((response: ApiResponse) => {
      if (response.result) {
        this.payload = EmployeeHelper.fromDtoToUpdatePayload(response.data as EmployeeDto);
      } else {
        this.error = response;
      }
    });

  }

}
