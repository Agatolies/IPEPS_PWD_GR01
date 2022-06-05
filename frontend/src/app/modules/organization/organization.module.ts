import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationDeleteComponent } from './component/organization-delete/organization-delete.component';


@NgModule({
  declarations: [
    OrganizationDeleteComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
