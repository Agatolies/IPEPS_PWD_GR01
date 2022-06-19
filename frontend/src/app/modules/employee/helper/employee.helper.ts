import { Employee, EmployeeDto } from '@employee/model';
import { AccountHelper } from '@account/helper';
import { OrganizationHelper } from '@organization/helper';
import { isNil } from 'lodash';

export class EmployeeHelper {
  public static fromDto(dto: EmployeeDto): Employee {
    return {
      account: AccountHelper.fromDto(dto.account),
      actif: dto.actif,
      id: dto.employee_id,
      organization: OrganizationHelper.fromDto(dto.organization),
      role: dto.role

    }
  }

  public static toDto(business: Employee): EmployeeDto {

    return (isNil(business))?  EmployeeHelper.toDto(EmployeeHelper.getEmpty()) : {
      account: AccountHelper.toDto(business.account),
      actif: business.actif,
      employee_id: business.id, salaries: [], wallets: [],
      organization: OrganizationHelper.toDto(business.organization),
      role: business.role

    }
  }

  static getEmpty(): Employee {
    return {
      account: AccountHelper.getEmpty(),
      actif: false,
      id: '',
      organization: OrganizationHelper.getEmpty(),
      role: ''

    }
  }
}
