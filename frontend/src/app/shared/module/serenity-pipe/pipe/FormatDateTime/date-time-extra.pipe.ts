import {Pipe, PipeTransform} from '@angular/core';
import {format} from 'date-fns'
import {fr} from 'date-fns/locale';

@Pipe({
  name: 'dateTimeExtra'
})
export class DateTimeExtraPipe implements PipeTransform {

  transform(value: Date | string): string | null {
    return format(new Date(value), "dd MMMM yyyy HH'h'MM", {locale: fr});
  }
}
