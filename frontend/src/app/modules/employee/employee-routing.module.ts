import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EmployeeCreateComponent,
  EmployeeDeleteComponent,
  EmployeeDetailComponent,
  EmployeeHomeComponent,
  EmployeeRouterComponent,
  EmployeeUpdateComponent
} from "./page";
import {EmployeeMenuComponent} from "@employee/component";

const routes: Routes = [
  {
    path: '',
    component: EmployeeRouterComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: EmployeeHomeComponent
      },
      {
        path: 'detail/:id',
        component: EmployeeDetailComponent
      },
      {
        path: 'create',
        component: EmployeeCreateComponent
      },
      {
        path:'update',
        component: EmployeeUpdateComponent
      },
      {
        path: 'delete/:id',
        component: EmployeeDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
