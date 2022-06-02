import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationMenuComponent } from './component/organization-menu/organization-menu.component';
import { OrganizationFormComponent } from './component/organization-form/organization-form.component';
import { OrganizationRouterComponent } from './component/organization-router/organization-router.component';


@NgModule({
  declarations: [
    OrganizationMenuComponent,
    OrganizationFormComponent,
    OrganizationRouterComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
