import {NgModule} from '@angular/core';
import {SecurityRoutingModule} from './security-routing.module';
import {SigninComponent, SignupComponent} from '@security/component';
import {SharedModule} from "@shared/shared.module";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
    imports: [
        SecurityRoutingModule,
        SharedModule
    ],
  providers: []
})
export class SecurityModule {
}
