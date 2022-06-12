import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AccountCreateComponent,
  AccountDeleteComponent,
  AccountDetailComponent,
  AccountHomeComponent,
  AccountRouterComponent,
  AccountUpdateComponent
} from "./page";

const routes: Routes = [
  {
    path: '',
    component: AccountRouterComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: AccountHomeComponent
      },
      {
        path: 'detail/:id',
        component: AccountDetailComponent
      },
      {
        path: 'create',
        component: AccountCreateComponent
      },
      {
        path:'update',
        component: AccountUpdateComponent
      },
      {
        path: 'delete/:id',
        component: AccountDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
