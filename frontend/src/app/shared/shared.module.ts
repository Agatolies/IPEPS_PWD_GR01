import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  DestroyableComponent,
  PageNotFoundComponent,
  UnderConstructionComponent
} from '@shared/component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BreadCrumbComponent } from '@shared/component/bread-crumb/bread-crumb.component';


import { CardModule } from '@card';
import { SerenityFormsModule } from '@form';
import { ToastModule } from '@toast';
import { TypographyModule } from "@typography";
import { DataListModule } from '@dataList';
import { SerenityDirectiveModule } from '@directive';
import { DialogModule } from '@dialog';
import { MenuModule } from '@menu';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    DestroyableComponent,
    UnderConstructionComponent,
    BreadCrumbComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    SerenityFormsModule,
    ToastModule,
    TypographyModule,
    DataListModule,
    SerenityDirectiveModule,
    MenuModule
  ],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PageNotFoundComponent,
    UnderConstructionComponent,
    BreadCrumbComponent,
    CardModule,
    SerenityFormsModule,
    ToastModule,
    TypographyModule,
    DataListModule,
    SerenityDirectiveModule,
    DialogModule,
    MenuModule,
  ]
})
export class SharedModule {
}
