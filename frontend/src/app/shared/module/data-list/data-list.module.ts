import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChipComponent,
  DataListComponent,
  FilterAreaComponent,
  PaginationComponent
} from '@shared/module/data-list/component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SerenityDirectiveModule } from '@shared/module/serenity-directive/serenity-directive.module';


@NgModule({
  declarations: [
    ChipComponent,
    DataListComponent,
    FilterAreaComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    SerenityDirectiveModule
  ],
  exports: [
    DataListComponent,
    FilterAreaComponent,
    PaginationComponent
  ]
})
export class DataListModule {
}
