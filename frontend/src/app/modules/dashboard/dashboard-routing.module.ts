import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent, DashboardHomeComponent, DashboardNotFoundComponent } from './component';
import {DocumentRouterComponent} from "../document/page/index";
import {SecurityGuard} from "@security/guard";

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
        path:'organization',
        loadChildren: ()=> import('@organization/organization.module').then(m=>m.OrganizationModule)
      },
      {
        path:'employee',
        loadChildren: ()=> import('@employee/employee.module').then(m=>m.EmployeeModule)
      },
      {
        path:'my-account',
        loadChildren: ()=> import('@account/account.module').then(m=>m.AccountModule)
      },
      {
        path: 'document',
        loadChildren: ()=> import('../document/document.module').then(m =>m.DocumentModule)
      },
      {
        path: 'wallet',
        loadChildren: ()=> import('../wallet/wallet.module').then(m =>m.WalletModule)
      },
      {
        path: "**",
        component: DashboardNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
