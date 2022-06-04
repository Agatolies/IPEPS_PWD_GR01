import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmployeeMenuComponent } from './component/employee-menu/employee-menu.component';
import { EmployeeRouterComponent } from './component/employee-router/employee-router.component';


@NgModule({
  declarations: [
    EmployeeFormComponent,
    EmployeeMenuComponent,
    EmployeeRouterComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
