import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent, ToasterContainerComponent } from '@shared/module/toast/component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ToastComponent, ToasterContainerComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [ToastComponent, ToasterContainerComponent]
})
export class ToastModule {
}
