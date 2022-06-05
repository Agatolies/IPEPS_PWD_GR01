import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { ContactMenuComponent } from './component/contact-menu/contact-menu.component';


@NgModule({
  declarations: [
    ContactFormComponent,
    ContactMenuComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
