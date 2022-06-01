import {Pipe, PipeTransform} from '@angular/core';
import {format} from 'date-fns'
import {fr} from 'date-fns/locale';

@Pipe({
  name: 'dateExtra'
})
export class DateExtraPipe implements PipeTransform {

  transform(value: Date | string): string | null {
    return format(new Date(value), "dd MMMM yyyy", {locale: fr});
  }
}
