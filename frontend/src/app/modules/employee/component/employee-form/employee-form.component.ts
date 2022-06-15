import {Component, Input, OnInit} from '@angular/core';
import {EmployeeUpdatePayload, EmployeeCreatePayload} from "@employee/model/payload";
import {FormAction} from "@shared/model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../../service/employee.service";
import {NavigationService} from "@shared/service";


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @Input() payload!: EmployeeCreatePayload |EmployeeUpdatePayload;
  @Input() type!: FormAction;

  formGroup!: FormGroup;
  formGroupEmp!: FormGroup;
  label!: string;

  constructor(public employeeService: EmployeeService, public navigationService: NavigationService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.label = (this.type === FormAction.ADD) ? 'common.form.btn.create' : 'common.form.btn.update';
    this.initFormEmp();
    this.formGroup = new FormGroup({
      role: new FormControl(this.payload.role),
      actif: new FormControl(this.payload.actif),
      organization : new FormControl(this.payload.organization)
    });
  }
  initFormEmp(){
    this.formGroupEmp = this.formBuilder.group({
      role: '',
      actif: false,
      organization: ''
    });
  }
}
