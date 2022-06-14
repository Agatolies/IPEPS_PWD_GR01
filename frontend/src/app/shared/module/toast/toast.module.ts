import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ToastComponent, ToasterContainerComponent } from '@shared/module/toast/component';


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
