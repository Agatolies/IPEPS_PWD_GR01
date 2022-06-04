import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrganizationRouterComponent} from "./component/organization-router/organization-router.component";
import {OrganizationMenuComponent} from "./component/organization-menu/organization-menu.component";
import {OrganizationFormComponent} from "./component/organization-form/organization-form.component";

const routes: Routes = [
  {
    path:'',
    component: OrganizationRouterComponent,
    children:[
      {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
      },
      {
        path:'home',
        component: OrganizationMenuComponent
      },
      {
        path:'form',
        component: OrganizationFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
