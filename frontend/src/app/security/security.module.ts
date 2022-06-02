import {NgModule} from '@angular/core';
import {SecurityRoutingModule} from './security-routing.module';
import {SigninComponent, SignupComponent} from '@security/component';
import {SharedModule} from "@shared/shared.module";
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
    imports: [
        SecurityRoutingModule,
        SharedModule,
        MatSliderModule
    ],
  providers: []
})
export class SecurityModule {
}
