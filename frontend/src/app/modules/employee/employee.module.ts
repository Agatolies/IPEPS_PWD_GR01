import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmployeeMenuComponent } from './component/employee-menu/employee-menu.component';
import { EmployeeUpdateComponent } from './page/ecosystem/employee-update/employee-update.component';
import { EmployeeHomeComponent } from './page/ecosystem/employee-home/employee-home.component';
import { EmployeeDetailComponent } from './page/ecosystem/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './page/ecosystem/employee-create/employee-create.component';
import {EmployeeDeleteComponent} from "@employee/page/ecosystem/employee-delete/employee-delete.component";
import {EmployeeRouterComponent} from "@employee/page";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {SerenityFormsModule} from "@form";


@NgModule({
    declarations: [
        EmployeeFormComponent,
        EmployeeMenuComponent,
        EmployeeRouterComponent,
        EmployeeDeleteComponent,
        EmployeeUpdateComponent,
        EmployeeHomeComponent,
        EmployeeDetailComponent,
        EmployeeCreateComponent
    ],
    exports: [
        EmployeeFormComponent
    ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        ReactiveFormsModule,
        TranslateModule,
        SerenityFormsModule
    ]
})
export class EmployeeModule { }
