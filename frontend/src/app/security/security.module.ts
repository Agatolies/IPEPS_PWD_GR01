import {NgModule} from '@angular/core';
import {SecurityRoutingModule} from './security-routing.module';
import {SigninComponent, SignupComponent} from '@security/component';
import {SharedModule} from "@shared/shared.module";
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    SecurityRoutingModule,
    SharedModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    TranslateModule
  ],
  providers: []
})
export class SecurityModule {
}
