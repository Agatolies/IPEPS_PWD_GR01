import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeFormComponent, EmployeeMenuComponent} from '@employee/component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '@shared/shared.module';
import {
  EmployeeCreateComponent,
  EmployeeDetailComponent,
  EmployeeHomeComponent,
  EmployeeRouterComponent,
  EmployeeUpdateComponent
} from '@employee/page';
import {EmployeeRoutingModule} from '@employee/employee-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { EmployeeDeletedComponent } from './page/eco-system/employee-deleted/employee-deleted.component';


@NgModule({
  declarations: [
    EmployeeMenuComponent,
    EmployeeRouterComponent,
    EmployeeHomeComponent,
    EmployeeFormComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeDeletedComponent
  ],
  exports: [
    EmployeeMenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    EmployeeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule {
}
