import { Employee, EmployeeDto } from '@employee/model';
import { AccountHelper } from '@account/helper';
import { OrganizationHelper } from '@organization/helper';
import { isNil } from 'lodash';

export class EmployeeHelper {
  public static fromDto(dto: EmployeeDto): Employee {
    return {
      firstname:dto.firstname,
      lastname:dto.lastname,
      actif: dto.actif,
      id: dto.employee_id,
      organization: OrganizationHelper.fromDto(dto.organization),
      role: dto.role

    }
  }

  public static toDto(business: Employee): EmployeeDto {

    return (isNil(business))?  EmployeeHelper.toDto(EmployeeHelper.getEmpty()) : {
      firstname:business.firstname,
      lastname:business.lastname,
      actif: business.actif,
      employee_id: business.id, salaries: [], wallets: [],
      organization: OrganizationHelper.toDto(business.organization),
      role: business.role

    }
  }

  static getEmpty(): Employee {
    return {
      firstname:'',
      lastname:'',
      actif: false,
      id: '',
      organization: OrganizationHelper.getEmpty(),
      role: ''

    }
  }
}
