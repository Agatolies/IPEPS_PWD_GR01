import {Pipe, PipeTransform} from '@angular/core';
import {format} from 'date-fns'
import {fr} from 'date-fns/locale';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date | string): string | null {
    return format(new Date(value), "HH:mm", {locale: fr});
  }
}
