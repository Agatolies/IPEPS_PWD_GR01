import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '@employee/service/employee.service';
import { FormAction, MenuActionType } from '@shared/model';
import { EmployeeCreatePayload } from '@employee/model/payload';
import { EmployeeHelper } from '@employee/helper/employee.helper';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  payload:EmployeeCreatePayload = EmployeeHelper.getCreatePaylaod();
  formAction=FormAction
  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.currentAction$.next(MenuActionType.ADD);

  }

}
