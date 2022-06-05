import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ComponentComponent } from './component/component.component';
import { ScheduleFormComponent } from './component/schedule-form/schedule-form.component';
import { ScheduleMenuComponent } from './component/schedule-menu/schedule-menu.component';


@NgModule({
  declarations: [
    ComponentComponent,
    ScheduleFormComponent,
    ScheduleMenuComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
