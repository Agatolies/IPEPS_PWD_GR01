import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ColorPickerComponent,
  DatePickerComponent,
  FormBooleanSelectComponent,
  FormBtnComponent,
  FormInputComponent,
  FormMultiSelectComponent,
  FormSelectComponent,
  TimePickerComponent
} from '@shared/module/forms/component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SerenityPipeModule } from '@pipe';
import { FormCheckComponent } from '@shared/module/forms/component/form-check/form-check.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ColorPickerModule } from 'ngx-color-picker';
import { SwitchComponent } from './component/switch/switch.component';
import { SerenityDirectiveModule } from '@directive';


@NgModule({
  declarations: [
    FormBooleanSelectComponent,
    FormBtnComponent,
    FormInputComponent,
    FormSelectComponent,
    FormMultiSelectComponent,
    FormSelectComponent,
    FormCheckComponent,
    ColorPickerComponent,
    DatePickerComponent,
    TimePickerComponent,
    SwitchComponent
  ],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        SerenityPipeModule,
        MatCheckboxModule,
        NgxMaterialTimepickerModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatIconModule,
        ColorPickerModule,
        MatCheckboxModule,
        SerenityDirectiveModule,
    ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'be'},
  ],
  exports: [
    FormBooleanSelectComponent,
    FormBtnComponent,
    FormInputComponent,
    FormSelectComponent,
    FormMultiSelectComponent,
    FormSelectComponent,
    FormCheckComponent,
    ColorPickerComponent,
    DatePickerComponent,
    TimePickerComponent,
    SwitchComponent
  ],
})
export class SerenityFormsModule {
}
