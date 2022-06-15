import {Contact, ContactCreatePayload, ContactDto, ContactSearchPayload, ContactUpdatePayload} from "../model";
import {buildComponent} from "@angular/cdk/schematics";
import {SortEnum, SortFilter} from "@shared/module/data-list/model";

export class ContactHelper {
  public static fromDto(dto: ContactDto): Contact {
    return {
      isEmpty: false,
      id: dto.contact_id,
      lastname: dto.lastname,
      firstname: dto.firstname,
      email: dto.email,
      phone: dto.phone,
      deleted: dto.deleted,
      deletedAt: dto.deletedAt,
      deletedBy: dto.deletedBy
    }
  }

  public static toDto(business: Contact): ContactDto {
    return {
      contact_id: business.id,
      lastname: business.lastname,
      firstname: business.firstname,
      email: business.email,
      phone: business.phone,

      deleted: business.deleted,
      deletedBy: business.deletedBy,
      deletedAt: business.deletedAt
    }
  }
  public static getEmpty(): Contact {
    return {
      id: '',
      lastname: '',
      firstname: '',
      email: '' ,
      phone: '',

      deleted: false,
      deletedAt: new Date(),
      deletedBy:'',
      isEmpty: true
    }
  }

  static getCreatePayload(): ContactCreatePayload {
    return {
      lastname: '',
      firstname: '',
      email: '' ,
      phone: '',

      deleted: false,
      deletedAt: new Date(),
      deletedBy:'',
    }
  }

  static fromDtoToUpdatePayload(dto: ContactDto): ContactUpdatePayload {
    return {...dto}
  }

  static emptySearch(): ContactSearchPayload {
    return {
      lastname: '',
      firstname: '',
      email: '' ,
      phone: '',

      deleted: false,
      deletedAt: new Date(),
      deletedBy:'',
    }
  }

  static defaultSort(): SortFilter {
    return {sort: SortEnum.ASC, field: 'lastname'};
  }
}
