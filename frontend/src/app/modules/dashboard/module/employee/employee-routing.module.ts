import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  EmployeeCreateComponent,
  EmployeeDetailComponent,
  EmployeeHomeComponent,
  EmployeeRouterComponent,
  EmployeeUpdateComponent
} from '@employee/page';
import {AddressDeletedComponent} from '@address/page';
import {EmployeeDeletedComponent} from '@employee/page/eco-system/employee-deleted/employee-deleted.component';

const routes: Routes = [
  {
    path:'',
    component: EmployeeRouterComponent,
    children: [
      {
        path:'',
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
        path: 'update/:action/:id',
        component: EmployeeUpdateComponent
      },
      {
        path: 'deleted',
        component: EmployeeDeletedComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
