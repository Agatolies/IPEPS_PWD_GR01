import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrganizationHomeComponent} from "@organization/page/ecosystem/organization-home/organization-home.component";
import {
  OrganizationDetailComponent
} from "@organization/page/ecosystem/organization-detail/organization-detail.component";
import {
  OrganizationCreateComponent
} from "@organization/page/ecosystem/organization-create/organization-create.component";
import {
  OrganizationUpdateComponent
} from "@organization/page/ecosystem/organization-update/organization-update.component";
import {
  OrganizationDeleteComponent
} from "@organization/page/ecosystem/organization-delete/organization-delete.component";
import {
  OrganizationRouterComponent
} from "@organization/page/ecosystem/organization-router/organization-router.component";
import {OrganizationFormComponent, OrganizationMenuComponent} from "@organization/component";
import {ReactiveFormsModule} from "@angular/forms";
import {SerenityFormsModule} from "@form";


const routes: Routes = [
  {
    path: '',
    component: OrganizationRouterComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: OrganizationHomeComponent
      },
      {
        path: 'detail/:id',
        component: OrganizationDetailComponent
      },
      {
        path: 'create',
        component: OrganizationCreateComponent
      },
      {
        path:'update',
        component: OrganizationUpdateComponent
      },
      {
        path: 'delete/:id',
        component: OrganizationDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, SerenityFormsModule],
    declarations: [
        OrganizationMenuComponent,
        OrganizationFormComponent
    ],
    exports: [RouterModule, OrganizationMenuComponent, OrganizationFormComponent]
})
export class OrganizationRoutingModule { }
