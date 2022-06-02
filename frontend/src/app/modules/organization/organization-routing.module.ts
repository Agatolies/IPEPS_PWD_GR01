import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrganizationRouterComponent} from "./component/organization-router/organization-router.component";
import {OrganizationHomeComponent} from "./component/organization-home/organization-home.component";
import {DashboardNotFoundComponent} from "@dashboard/component";

const routes: Routes = [{
  path:'',
  component: OrganizationRouterComponent,
  children: [
    {
      path:'',
      redirectTo:'home',
      pathMatch:'full'
    },
    {
      path:'home',
      component: OrganizationHomeComponent
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
export class OrganizationRoutingModule { }
