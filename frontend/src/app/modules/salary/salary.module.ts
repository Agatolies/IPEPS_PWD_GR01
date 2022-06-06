import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRoutingModule } from './salary-routing.module';
import { SalaryFormComponent } from './component/salary-form/salary-form.component';
import { SalaryMenuComponent } from './component/salary-menu/salary-menu.component';
import { SalaryCreateComponent } from './page/eco-system/salary-create/salary-create.component';
import { SalaryDeletedComponent } from './page/eco-system/salary-deleted/salary-deleted.component';
import { SalaryDetailComponent } from './page/eco-system/salary-detail/salary-detail.component';
import { SalaryHomeComponent } from './page/eco-system/salary-home/salary-home.component';
import { SalaryRouterComponent } from './page/eco-system/salary-router/salary-router.component';
import { SalaryUpdateComponent } from './page/eco-system/salary-update/salary-update.component';


@NgModule({
  declarations: [
    SalaryFormComponent,
    SalaryMenuComponent,
    SalaryCreateComponent,
    SalaryDeletedComponent,
    SalaryDetailComponent,
    SalaryHomeComponent,
    SalaryRouterComponent,
    SalaryUpdateComponent
  ],
  imports: [
    CommonModule,
    SalaryRoutingModule
  ]
})
export class SalaryModule { }
