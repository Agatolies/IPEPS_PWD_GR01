import {NgModule} from '@angular/core';
import {SecurityRoutingModule} from './security-routing.module';
import {SigninComponent, SignupComponent} from '@security/component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    SecurityRoutingModule
  ],
  providers: []
})
export class SecurityModule {
}
