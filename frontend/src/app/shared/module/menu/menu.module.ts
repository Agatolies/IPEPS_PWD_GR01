import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent, MainMenuComponent } from '@shared/module/menu/component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ContextMenuComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatTooltipModule
  ],
  exports: [
    ContextMenuComponent,
    MainMenuComponent
  ]

})
export class MenuModule {
}
