import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BooleanTranslateDirective,
  ClickOutsideDirective,
  ConfirmDialogDirective
} from '@shared/module/serenity-directive/directive';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    BooleanTranslateDirective,
    ClickOutsideDirective,
    ConfirmDialogDirective
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    BooleanTranslateDirective,
    ClickOutsideDirective,
    ConfirmDialogDirective
  ]
})
export class SerenityDirectiveModule {
}
