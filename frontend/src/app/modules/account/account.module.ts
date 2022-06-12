import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountMenuComponent } from './component/account-menu/account-menu.component';
import { AccountFormComponent } from './component/account-form/account-form.component';
import {SharedModule} from "@shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { AccountCreateComponent } from './page/ecosystem/account-create/account-create.component';
import { AccountDetailComponent } from './page/ecosystem/account-detail/account-detail.component';
import { AccountHomeComponent } from './page/ecosystem/account-home/account-home.component';
import { AccountUpdateComponent } from './page/ecosystem/account-update/account-update.component';
import {AccountDeleteComponent, AccountRouterComponent} from "@account/page";


@NgModule({
  declarations: [
    AccountMenuComponent,
    AccountFormComponent,
    AccountRouterComponent,
    AccountDeleteComponent,
    AccountCreateComponent,
    AccountDetailComponent,
    AccountHomeComponent,
    AccountUpdateComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
