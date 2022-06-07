import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressFormComponent } from './component/address-form/address-form.component';
import { AddressMenuComponent } from './component/address-menu/address-menu.component';
import { AddressCreateComponent } from './page/eco-system/address-create/address-create.component';
import { AddressDeletedComponent } from './page/eco-system/address-deleted/address-deleted.component';
import { AddressDetailComponent } from './page/eco-system/address-detail/address-detail.component';
import { AddressHomeComponent } from './page/eco-system/address-home/address-home.component';
import { AddressRouterComponent } from './page/eco-system/address-router/address-router.component';
import { AddressUpdateComponent } from './page/eco-system/address-update/address-update.component';
import { PayloadsComponent } from './model/payloads/payloads.component';


@NgModule({
  declarations: [
    AddressFormComponent,
    AddressMenuComponent,
    AddressCreateComponent,
    AddressDeletedComponent,
    AddressDetailComponent,
    AddressHomeComponent,
    AddressRouterComponent,
    AddressUpdateComponent,
    PayloadsComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule
  ]
})
export class AddressModule { }
