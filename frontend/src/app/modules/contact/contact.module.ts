import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '@shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactFormComponent, ContactMenuComponent} from "./component";
import {
  ContactCreateComponent,
  ContactDeleteComponent,
  ContactDetailComponent,
  ContactHomeComponent,
  ContactRouteurComponent,
  ContactUpdateComponent,
} from "./page/ecosystem";
import {ContactRoutingModule} from "./contact-routing.modules";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    ContactMenuComponent,
    ContactHomeComponent,
    ContactFormComponent,
    ContactDetailComponent,
    ContactCreateComponent,
    ContactRouteurComponent,
    ContactUpdateComponent,
    ContactDeleteComponent

  ],
  exports: [
    ContactMenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatCardModule
  ]
})
export class ContactModule {
}
