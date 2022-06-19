import {Contact, ContactCreatePayload, ContactDto, ContactSearchPayload} from "../model";
import {buildComponent} from "@angular/cdk/schematics";
import {SortEnum, SortFilter} from "@shared/module/data-list/model";

export class ContactHelper {
  public static fromDto(dto: ContactDto): Contact {
    return {
      id: dto.contact_id,
      lastname: dto.lastname,
      firstname: dto.firstname,
      email: dto.email,
      phone: dto.phone,
      isEmpty: false,

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
      deletedAt: business.deletedAt,
      deletedBy: business.deletedBy
    }
  }

  static emptySearch(): ContactSearchPayload {
    return {
      lastname: '',
      firstname: '',
      email:'',
      phone:'',

      deleted:false,
      deletedAt: new Date(),
      deletedBy:'',
    }
  }

  static defaultSort(): SortFilter {
    return {sort: SortEnum.ASC, field: 'lastname'};
  }

  static getCreatePayload(): ContactCreatePayload {
    return {
      lastname: '',
      firstname: '',
      address: "",
      email:'',
      phone:'',

      deleted:false,
      deletedAt: new Date(),
      deletedBy:''
    }
  }
}
