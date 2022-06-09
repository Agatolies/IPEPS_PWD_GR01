import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountMenuComponent } from './component/account-menu/account-menu.component';
import { AccountFormComponent } from './component/account-form/account-form.component';
import { AccountRouterComponent } from './component/account-router/account-router.component';
import { AccountDeleteComponent } from './component/account-delete/account-delete.component';
import {SharedModule} from "@shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AccountMenuComponent,
    AccountFormComponent,
    AccountRouterComponent,
    AccountDeleteComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
