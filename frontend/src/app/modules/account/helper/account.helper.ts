import {AccountCreatePayload, AccountDto, AccountUpdatePayload, Account} from "@account/model";


export class AccountHelper {
  public static fromDto(dto: AccountDto): Account {
    return {

      id: dto.account_id,
      firstname: dto.firstname,
      lastname: dto.lastname
    }
  }

  public static toDto(business: Account): AccountDto {
    return {
      account_id: business.id,
      firstname: business.firstname,
      lastname: business.lastname
    }
  }

  public static getEmpty(): Account {
    return {
      id: '',
      firstname: '',
      lastname: ''
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
