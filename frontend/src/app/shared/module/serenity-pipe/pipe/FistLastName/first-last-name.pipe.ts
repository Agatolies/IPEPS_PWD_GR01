import { Pipe, PipeTransform } from '@angular/core';

// import {Employee} from '@employee/model';

@Pipe({
  name: 'firstLastName'
})
export class FirstLastNamePipe implements PipeTransform {
  transform(): string {
    return '';
  }

  /* transform(employee: Employee): string {
     // return (employee == null)? '' : `${employee.firstname} ${employee.lastname}`;
   }*/

}
