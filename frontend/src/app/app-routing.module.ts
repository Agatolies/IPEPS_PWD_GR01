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
