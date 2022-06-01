import {Pipe, PipeTransform} from '@angular/core';
import {format} from 'date-fns'
import {fr} from 'date-fns/locale';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Date | string): string | null {
    return format(new Date(value), "dd/MM/yyyy", {locale: fr});
  }
}
