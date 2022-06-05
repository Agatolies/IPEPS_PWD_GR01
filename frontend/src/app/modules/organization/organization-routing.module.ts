import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardNotFoundComponent} from "@dashboard/component";
import {
  OrganizationFormComponent,
  OrganizationMenuComponent,
  OrganizationRouterComponent
} from "@organization/component";

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
      component: OrganizationMenuComponent
    },
    {
      path:'create',
      component: OrganizationFormComponent
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
