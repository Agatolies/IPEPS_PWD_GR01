import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent, DialogFilterComponent } from '@shared/module/dialog/component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [DialogComponent, DialogFilterComponent],
  imports: [
    CommonModule,
    DragDropModule,
    TranslateModule
  ],
  exports: [DialogComponent, DialogFilterComponent]
})
export class DialogModule {
}
