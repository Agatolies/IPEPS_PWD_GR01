import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicGuard, SecurityGuard } from '@security/guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    canActivate: [SecurityGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'employee',
    canActivate: [SecurityGuard],
    loadChildren: ()=> import('./modules/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path:'organization',
    canActivate: [SecurityGuard],
    loadChildren: ()=> import('./modules/organization/organization.module').then((m => m.OrganizationModule))
  },
  {
    path: 'account',
    canActivate: [SecurityGuard],
    loadChildren: () => import('./modules/account/account.module').then((m => m.AccountModule))
  },
  {
    path: 'account',
    canActivate: [PublicGuard],
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
  },
  {
    path: 'document',
    canActivate: [SecurityGuard],
    loadChildren: ()=> import('./modules/document/document.module').then(m =>m.DocumentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
