import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountRouterComponent} from "./component/account-router/account-router.component";
import {AccountMenuComponent} from "./component/account-menu/account-menu.component";
import {AccountFormComponent} from "./component/account-form/account-form.component";

const routes: Routes = [  {
  path:'',
  component: AccountRouterComponent,
  children:[
    {
      path:'',
      redirectTo: 'home',
      pathMatch:'full'
    },
    {
      path:'home',
      component: AccountMenuComponent
    },
    {
      path:'form',
      component: AccountFormComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
