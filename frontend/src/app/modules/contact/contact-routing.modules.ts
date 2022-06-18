import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  ContactCreateComponent,
  ContactHomeComponent,
  ContactRouteurComponent,
  ContactDetailComponent,
  ContactUpdateComponent,
  ContactDeleteComponent} from "./page/ecosystem";


const routes: Routes = [
  {
    path:'',
    component: ContactRouteurComponent,
    children: [
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: ContactHomeComponent
      },
      {
        path: 'detail/:id',
        component: ContactDetailComponent
      },
      {
        path: 'create',
        component: ContactCreateComponent
      },
      {
        path: 'update/:action/:id',
        component: ContactUpdateComponent
      },
      {
        path: 'delete',
        component: ContactDeleteComponent
      },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
