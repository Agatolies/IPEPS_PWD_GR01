import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  providers: [],
  exports: [MatSliderModule]
})
export class SharedModule {
}
