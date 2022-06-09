import { NgModule } from '@angular/core';
import {DashboardComponent, DashboardHomeComponent, DashboardNotFoundComponent} from '@dashboard/component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ClickOutsideModule } from 'ng-click-outside';
import {OrganizationRouterComponent} from "@organization/component";
import {EmployeeRouterComponent} from "@employee/component";
import {AccountRouterComponent} from "@account/component";

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardNotFoundComponent,
    OrganizationRouterComponent,
    EmployeeRouterComponent,
    AccountRouterComponent
  ],
  imports: [
    ClickOutsideModule,
    DashboardRoutingModule,
    CommonModule,
    TranslateModule
  ],
  providers: []
})
export class DashboardModule {
};
