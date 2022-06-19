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
    ReactiveFormsModule
  ]
})
export class ContactModule {
}
