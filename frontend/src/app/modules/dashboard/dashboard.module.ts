import { NgModule } from '@angular/core';
import {DashboardComponent, DashboardHomeComponent} from './component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { DashboardNotFoundComponent } from './component';

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
    exports: [
        DashboardComponent
    ],
    providers: []
})
export class DashboardModule {
};
