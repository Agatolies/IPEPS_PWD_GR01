import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent } from '@shared/module/card/component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [CardComponent, CardHeaderComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [CardComponent, CardHeaderComponent]
})
export class CardModule {
}
