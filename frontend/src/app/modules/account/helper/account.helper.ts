import {AccountCreatePayload, AccountDto, AccountUpdatePayload, Account} from "@account/model";
import {Employee, EmployeeDto} from "@employee/model";


export class AccountHelper {
  public static fromDto(dto: AccountDto): { firstname: string; id: string; employees: EmployeeDto[]; lastname: string } {
    return {
      id: dto.account_id,
      firstname: dto.firstname,
      lastname: dto.lastname,
      employees: dto.employees,
    }
  }

  public static toDto(business: Account): { firstname: string; account_id: string; employees: Employee; lastname: string } {
    return {
      account_id: business.id,
      firstname: business.firstname,
      lastname: business.lastname,
      employees: business.employees
    }
  }

  public static getEmpty(): { firstname: string; id: string; employees: string; lastname: string } {
    return {

      id: '',
      firstname: '',
      lastname: '',
      employees: ''
    }
  }

  static getCreatePaylaod(): AccountCreatePayload {
    return {
      firstname: '',
      lastname: ''
    }
  }

  static fromDtoToUpdatePayload(dto: AccountDto): AccountUpdatePayload {
    return {...dto}
  }
}
