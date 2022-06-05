import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { ContactMenuComponent } from './component/contact-menu/contact-menu.component';
import { ContactCreateComponent } from './page/ecosystem/contact-create/contact-create.component';
import { ContactDeleteComponent } from './page/ecosystem/contact-delete/contact-delete.component';
import { ContactUpdateComponent } from './page/ecosystem/contact-update/contact-update.component';
import { ContactHomeComponent } from './page/ecosystem/contact-home/contact-home.component';
import { ContactRouteurComponent } from './page/ecosystem/contact-routeur/contact-routeur.component';
import { ContactDetailComponent } from './page/ecosystem/contact-detail/contact-detail.component';


@NgModule({
  declarations: [
    ContactFormComponent,
    ContactMenuComponent,
    ContactCreateComponent,
    ContactDeleteComponent,
    ContactUpdateComponent,
    ContactHomeComponent,
    ContactRouteurComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
