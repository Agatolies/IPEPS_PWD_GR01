import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WalletDetailComponent,
  WalletHomeComponent,
  WalletUpdateComponent
} from './page';
import {DashboardComponent} from "@dashboard/component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: WalletHomeComponent
      },
      {
        path: 'detail/:id',
        component: WalletDetailComponent
      },
      {
        path: 'update/:action/:id',
        component: WalletUpdateComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
