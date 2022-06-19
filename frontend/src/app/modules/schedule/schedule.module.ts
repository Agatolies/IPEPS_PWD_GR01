import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleFormComponent } from './component/schedule-form/schedule-form.component';
import { ScheduleMenuComponent } from './component/schedule-menu/schedule-menu.component';
import { ScheduleRouteurComponent } from './component/schedule-routeur/schedule-routeur.component';
import { ScheduleCreateComponent } from './page/ecosystem/schedule-create/schedule-create.component';
import { ScheduleUpdateComponent } from './page/ecosystem/schedule-update/schedule-update.component';
import { ScheduleDeleteComponent } from './page/ecosystem/schedule-delete/schedule-delete.component';
import { ScheduleDetailComponent } from './page/ecosystem/schedule-detail/schedule-detail.component';
import { ScheduleHomeComponent } from './page/ecosystem/schedule-home/schedule-home.component';


@NgModule({
  declarations: [
    ScheduleFormComponent,
    ScheduleMenuComponent,
    ScheduleRouteurComponent,
    ScheduleCreateComponent,
    ScheduleUpdateComponent,
    ScheduleDeleteComponent,
    ScheduleDetailComponent,
    ScheduleHomeComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
