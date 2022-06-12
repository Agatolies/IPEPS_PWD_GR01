import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent, DashboardHomeComponent, DashboardNotFoundComponent } from './component';
import {OrganizationRouterComponent} from "../organization/component/organization-router/organization-router.component";
import {EmployeeRouterComponent} from "../employee/component/employee-router/employee-router.component";
import {AccountRouterComponent} from "../account/component/account-router/account-router.component";
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
        component: OrganizationRouterComponent
      },
      {
        path:'employee',
        component: EmployeeRouterComponent
      },
      {
        path:'my-account',
        component: AccountRouterComponent
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
};
