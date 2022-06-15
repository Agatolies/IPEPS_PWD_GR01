import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '@shared/shared.module';
import {
  ContactCreateComponent,
  ContactDetailComponent,
  ContactHomeComponent,
  ContactRouterComponent,
  ContactUpdateComponent
} from '@contact/page';
import {ContactRoutingModule} from '@contact/contact-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactFormComponent, ContactMenuComponent} from "./component";


@NgModule({
  declarations: [
    ContactMenuComponent,
    ContactRouterComponent,
    ContactHomeComponent,
    ContactFormComponent,
    ContactDetailComponent,
    ContactCreateComponent,
    ContactUpdateComponent,
    ContactDeletedComponent
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
