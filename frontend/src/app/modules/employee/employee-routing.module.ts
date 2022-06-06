import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EmployeeDeleteComponent,
  EmployeeFormComponent,
  EmployeeMenuComponent,
  EmployeeRouterComponent
} from "@employee/component";
import {DashboardNotFoundComponent} from "@dashboard/component";


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
      path:'create',
      component: EmployeeFormComponent
    },
    {
      path: 'delete',
      component: EmployeeDeleteComponent
    },
    {
      path:'**',
      component: DashboardNotFoundComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
