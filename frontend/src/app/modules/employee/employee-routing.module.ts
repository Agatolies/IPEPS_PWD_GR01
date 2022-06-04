import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeRouterComponent} from "./component/employee-router/employee-router.component";
import {EmployeeMenuComponent} from "./component/employee-menu/employee-menu.component";
import {EmployeeFormComponent} from "./component/employee-form/employee-form.component";

const routes: Routes = [  {
  path:'',
  component: EmployeeRouterComponent,
  children:[
    {
      path:'',
      redirectTo: 'home',
      pathMatch:'full'
    },
    {
      path:'home',
      component: EmployeeMenuComponent
    },
    {
      path:'form',
      component: EmployeeFormComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
