import { NgModule } from '@angular/core';
import {DashboardComponent, DashboardHomeComponent} from './component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { DashboardNotFoundComponent } from './component';
import {SharedModule} from "@shared/shared.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

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
    TranslateModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
    exports: [
        DashboardComponent
    ],
    providers: []
})
export class DashboardModule {
};
