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
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


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
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class DocumentModule { }
