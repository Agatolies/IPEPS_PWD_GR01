import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { PageTitleComponent } from '@shared/module/typography/component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule
  ],
  exports: [
    PageTitleComponent
  ]
})
export class TypographyModule { }
