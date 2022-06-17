import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentFormComponent } from './compoment/document-form/document-form.component';
import { DocumentMenuComponent } from './compoment/document-menu/document-menu.component';
import { DocumentCreateComponent } from './page/ecosystem/document-create/document-create.component';
import { DocumentDeleteComponent } from './page/ecosystem/document-delete/document-delete.component';
import { DocumentDetailComponent } from './page/ecosystem/document-detail/document-detail.component';
import { DocumentHomeComponent } from './page/ecosystem/document-home/document-home.component';
import { DocumentRouterComponent } from './page/ecosystem/document-router/document-router.component';
import { DocumentUpdateComponent } from './page/ecosystem/document-update/document-update.component';
import {SerenityFormsModule} from "@form";
import {ReactiveFormsModule} from "@angular/forms";
import {DashboardModule} from "@dashboard/dashboard.module";
import {TypographyModule} from "@typography";
import {MatCardModule} from "@angular/material/card";
import { DocumentListComponent } from './page/ecosystem/document-list/document-list.component';


@NgModule({
  declarations: [
    DocumentFormComponent,
    DocumentMenuComponent,
    DocumentCreateComponent,
    DocumentDeleteComponent,
    DocumentDetailComponent,
    DocumentHomeComponent,
    DocumentRouterComponent,
    DocumentUpdateComponent,
    DocumentListComponent
  ],
    imports: [
        CommonModule,
        DocumentRoutingModule,
        SerenityFormsModule,
        ReactiveFormsModule,
        DashboardModule,
        TypographyModule,
        MatCardModule
    ]
})
export class DocumentModule { }
