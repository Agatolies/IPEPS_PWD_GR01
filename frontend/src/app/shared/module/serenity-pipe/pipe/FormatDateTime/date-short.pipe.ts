import {Pipe, PipeTransform} from '@angular/core';
import {format} from 'date-fns'
import {fr} from 'date-fns/locale';

@Pipe({
  name: 'dateShort'
})
export class DateShortPipe implements PipeTransform {

  transform(value: Date | string): string | null {
    return format(new Date(value), "dd/MM/yy", {locale: fr});
  }
}
