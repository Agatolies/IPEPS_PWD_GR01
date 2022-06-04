import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountMenuComponent } from './component/account-menu/account-menu.component';
import { AccountFormComponent } from './component/account-form/account-form.component';
import { AccountRouterComponent } from './component/account-router/account-router.component';


@NgModule({
  declarations: [
    AccountMenuComponent,
    AccountFormComponent,
    AccountRouterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
