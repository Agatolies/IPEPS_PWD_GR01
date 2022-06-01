import {Pipe, PipeTransform} from '@angular/core';
import {format} from 'date-fns'
import {fr} from 'date-fns/locale';

@Pipe({
  name: 'timeExtra'
})
export class TimeExtraPipe implements PipeTransform {

  transform(value: Date | string): string | null {
    return format(new Date(value), "HH'h'mm", {locale: fr});
  }
}
