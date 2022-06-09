import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
    DestroyableComponent,
    ErrorComponent,
    PageNotFoundComponent,
    UnderConstructionComponent
} from '@shared/component';
import { FormsModule } from '@angular/forms';
import { BreadCrumbComponent } from '@shared/component/bread-crumb/bread-crumb.component';


import { CardModule } from '@card';
import { SerenityFormsModule } from '@form';
import { ToastModule } from '@toast';
import { DataListModule } from '@dataList';
import { SerenityDirectiveModule } from '@directive';
import { DialogModule } from '@dialog';
import { MenuModule } from '@menu';
import { LogoutComponent } from './component/logout/logout.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    DestroyableComponent,
    UnderConstructionComponent,
    BreadCrumbComponent,
    ErrorComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    CardModule,
    SerenityFormsModule,
    ToastModule,
    DataListModule,
    SerenityDirectiveModule,
    MenuModule
  ],
  providers: [],
    exports: [
        PageNotFoundComponent,
        UnderConstructionComponent,
        BreadCrumbComponent,
        CardModule,
        SerenityFormsModule,
        ToastModule,
        DataListModule,
        SerenityDirectiveModule,
        DialogModule,
        MenuModule,
        ErrorComponent
    ]
})
export class SharedModule {
}
