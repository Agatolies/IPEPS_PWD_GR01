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
import {EmployeeModule} from "@employee/employee.module";


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
        EmployeeModule
    ]
})
export class ContactModule {
}
