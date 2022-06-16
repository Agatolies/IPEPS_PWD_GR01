import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  ContactCreateComponent,
  ContactDetailComponent,
  ContactHomeComponent,
  ContactRouteurComponent,
  ContactUpdateComponent} from '@contact/page';
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

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}
