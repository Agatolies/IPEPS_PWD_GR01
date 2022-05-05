import {NgModule} from '@angular/core';
import {DashboardComponent} from './component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [DashboardRoutingModule, CommonModule],
  providers: []
})
export class DashboardModule {
}
