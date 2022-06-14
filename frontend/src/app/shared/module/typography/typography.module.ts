import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { PageTitleComponent } from '@shared/module/typography/component';

@NgModule({
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    PageTitleComponent
  ]
})
export class TypographyModule { }
