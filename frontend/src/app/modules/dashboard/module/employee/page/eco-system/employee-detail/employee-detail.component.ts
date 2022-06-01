import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '@employee/service/employee.service';
import {ApiResponse, FormAction, MenuActionType} from '@shared/model';
import {EmployeeDto} from '@employee/model';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {EmployeeHelper} from '@employee/helper/employee.helper';
import {Employee} from '@employee/model/business/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  detail?: Employee;
  error?: ApiResponse;

  constructor(public employeeService: EmployeeService, public activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.employeeService.currentAction$.next(MenuActionType.DETAIL);
    this.activatedRouter.params.pipe(
      switchMap((param: Params) => {
        if (param['id']) {
          return this.employeeService.getDetail(param['id'])
        }
        return of({result: false, data: null, code: 'page.employee.form.error.not-found'});
      })
    ).subscribe((response: ApiResponse) => {
      if (response.result) {
        this.detail = EmployeeHelper.fromDto(response.data as EmployeeDto);
      } else {
        this.error = response;
      }
    });

  }

}
