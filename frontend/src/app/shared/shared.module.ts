import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  DestroyableComponent,
  PageNotFoundComponent,
  UnderConstructionComponent
} from '@shared/component';
import { FormsModule } from '@angular/forms';
import { BreadCrumbComponent } from '@shared/component/bread-crumb/bread-crumb.component';


import { CardModule } from '@card';
import { SerenityFormsModule } from '@form';
import { ToastModule } from '@toast';
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
    CardModule,
    SerenityFormsModule,
    ToastModule,
    DataListModule,
    SerenityDirectiveModule,
    MenuModule
  ],
  providers: [],
  exports: [
    PageNotFoundComponent,
    UnderConstructionComponent,
    BreadCrumbComponent,
    CardModule,
    SerenityFormsModule,
    ToastModule,
    DataListModule,
    SerenityDirectiveModule,
    DialogModule,
    MenuModule
  ]
})
export class SharedModule {
}
