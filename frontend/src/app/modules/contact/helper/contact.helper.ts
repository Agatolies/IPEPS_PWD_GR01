import {Contact, ContactDto} from "../model";
import {buildComponent} from "@angular/cdk/schematics";

export class ContactHelper {
  public static fromDto(dto: ContactDto): Contact {
    return {
      isEmpty: false,
      id: dto.contact_id,
      lastname: dto.lastname,
      firstname: dto.firstname,
      email: dto.email,
      phone: dto.phone
    }
  }

  public static toDto(business: Contact): ContactDto {
    return {
      contact_id: business.id,
      lastname: business.lastname,
      firstname: business.firstname,
      email: business.email,
      phone: business.phone
    }
  }
}
