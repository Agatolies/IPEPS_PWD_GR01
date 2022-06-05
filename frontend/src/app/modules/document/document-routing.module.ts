import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentRouterComponent} from "./page/ecosystem/document-router/document-router.component";
import {DocumentHomeComponent} from "./page/ecosystem/document-home/document-home.component";
import {
  DocumentCreateComponent,
  DocumentDeleteComponent,
  DocumentDetailComponent,
  DocumentUpdateComponent
} from "./page";

const routes: Routes = [
  {
    path: '',
    component: DocumentRouterComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: DocumentHomeComponent
      },
      {
        path: 'detail/:id',
        component: DocumentDetailComponent
      },
      {
        path: 'create',
        component: DocumentCreateComponent
      },
      {
        path:'update/:action/:id',
        component: DocumentUpdateComponent
      },
      {
        path: 'delete',
        component: DocumentDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
