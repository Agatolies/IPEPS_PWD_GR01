import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DateExtraPipe,
  DatePipe,
  DateShortExtraPipe,
  DateShortPipe,
  DateTimeExtraPipe,
  DateTimePipe,
  DateTinyExtraPipe,
  DateTinyPipe,
  FirstLastNamePipe,
  TimeExtraPipe,
  TimePipe
} from '@shared/module/serenity-pipe/pipe';


@NgModule({
  declarations: [
    DateExtraPipe,
    DatePipe,
    DateShortExtraPipe,
    DateShortPipe,
    DateTimeExtraPipe,
    DateTimePipe,
    DateTinyExtraPipe,
    DateTinyPipe,
    FirstLastNamePipe,
    TimeExtraPipe,
    TimePipe],
  imports: [
    CommonModule
  ],
  exports: [
    DateExtraPipe,
    DatePipe,
    DateShortExtraPipe,
    DateShortPipe,
    DateTimeExtraPipe,
    DateTimePipe,
    DateTinyExtraPipe,
    DateTinyPipe,
    FirstLastNamePipe,
    TimeExtraPipe,
    TimePipe]
})
export class SerenityPipeModule {
}
