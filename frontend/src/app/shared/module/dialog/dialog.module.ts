import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent, DialogFilterComponent } from '@shared/module/dialog/component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';
import { CreateDialogComponent } from './component/create-dialog/create-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [DialogComponent, DialogFilterComponent],
  imports: [
    CommonModule,
    DragDropModule,
    TranslateModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [DialogComponent, DialogFilterComponent]
})
export class DialogModule {
}
