import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountFormComponent, AccountRouterComponent} from "@account/component";
import {AccountMenuComponent} from "@account/component/account-menu/account-menu.component";
import {DashboardNotFoundComponent} from "@dashboard/component";




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
      path:'create',
      component: AccountFormComponent
    },
    {
      path:'**',
      component: DashboardNotFoundComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
