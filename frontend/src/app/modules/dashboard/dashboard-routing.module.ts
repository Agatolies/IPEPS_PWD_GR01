import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent, DashboardHomeComponent, DashboardNotFoundComponent } from './component';
import {OrganizationRouterComponent} from "@organization/component";
import {EmployeeRouterComponent} from "@employee/component";
import {AccountRouterComponent} from "@account/component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, // Launch all children roads in the router outlet of this component (DashboardComponent)
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: DashboardHomeComponent
      },
      {
        path: '**',
        component: DashboardNotFoundComponent
      },
      {
        path:'organization',
        component: OrganizationRouterComponent
      },
      {
        path:'employee',
        component: EmployeeRouterComponent
      },
      {
        path:'my-account',
        component: AccountRouterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
};
