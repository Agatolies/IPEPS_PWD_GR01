import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicGuard} from "@security/guard";

const routes: Routes = [
  {
    path: 'organization',
    loadChildren: () => import('./component/organization-router/organization-router.component').then(m => m.OrganizationRouterComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
