import {Pipe, PipeTransform} from '@angular/core';
import {format} from 'date-fns'
import {fr} from 'date-fns/locale';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: Date | string): string | null {
    return format(new Date(value), "dd/MM/yyyy HH:MM", {locale: fr});
  }
}
