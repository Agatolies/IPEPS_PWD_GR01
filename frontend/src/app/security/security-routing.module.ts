import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SigninComponent, SignupComponent} from '@security/component';
import {DashboardComponent} from "@dashboard/component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, // Launch all children roads in the router outlet of this component (DashboardComponent)
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
      }, {
        path: 'signin',
        component: SigninComponent
      }, {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {
}
