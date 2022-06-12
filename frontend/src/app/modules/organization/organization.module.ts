import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationCreateComponent } from './page/ecosystem/organization-create/organization-create.component';
import { OrganizationDetailComponent } from './page/ecosystem/organization-detail/organization-detail.component';
import { OrganizationHomeComponent } from './page/ecosystem/organization-home/organization-home.component';
import { OrganizationRouterComponent } from './page/ecosystem/organization-router/organization-router.component';
import { OrganizationUpdateComponent } from './page/ecosystem/organization-update/organization-update.component';
import { OrganizationDeleteComponent } from "@organization/page/ecosystem/organization-delete/organization-delete.component";


@NgModule({
  declarations: [
    OrganizationDeleteComponent,
    OrganizationCreateComponent,
    OrganizationDetailComponent,
    OrganizationHomeComponent,
    OrganizationRouterComponent,
    OrganizationUpdateComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
