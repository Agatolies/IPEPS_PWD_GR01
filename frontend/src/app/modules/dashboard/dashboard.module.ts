import { NgModule } from '@angular/core';
import { DashboardComponent } from './component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { DashboardHomeComponent } from '@dashboard/component';
import { DashboardNotFoundComponent } from './component/dashboard-not-found/dashboard-not-found.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardNotFoundComponent
  ],
  imports: [
    ClickOutsideModule,
    DashboardRoutingModule,
    CommonModule,
    TranslateModule
  ],
  providers: []
})
export class DashboardModule {
};
