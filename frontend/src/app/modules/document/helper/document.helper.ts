import { Document, DocumentCreatePayload, Documentdto, DocumentUpdatePayload } from "../Model";
import { EmployeeHelper } from '@employee/helper/employee.helper';
import { OrganizationHelper } from '@organization/helper';
import { isNil } from 'lodash';

export class DocumentHelper {
  public static fromDTO(dto: Documentdto): Document {
    console.log('dto a transformé', dto);
    return {
      id: dto.document_id,
      name: dto.name,
      description: dto.description,
      path: dto.path,
      type: dto.type,
      freeAccess: dto.freeAccess,
      employee: (isNil(dto.employee)) ? undefined : EmployeeHelper.fromDto(dto.employee),
      organization: (isNil(dto.organization)) ? undefined : OrganizationHelper.fromDto(dto.organization),

      isEmpty: false
    }
  }

  public static toDto(business: Document): Documentdto {
    return {
      document_id: business.id,
      name: business.name,
      description: business.description,
      path: business.path,
      type: business.type,
      freeAccess: business.freeAccess,
      employee: EmployeeHelper.toDto(business.employee!),
      organization: OrganizationHelper.toDto(business.organization!),
    }
  }


  public static getEmpty(): Document {
    return {
      id: '',
      name: '',
      description: '',
      path: '',
      type: '',
      freeAccess: false,
      /*employee: EmployeeHelper.getEmpty(),
      organization: OrganizationHelper.getEmpty(),
      transaction: {
        id: '', type: '', amount: 0
      },*/
      isEmpty: true
    }
  }

  static getCreatePayload(): DocumentCreatePayload {
    return {
      name: '',
      description: '',
      path: '',
      type: '',
      freeAccess: false,
      employee: EmployeeHelper.toDto(EmployeeHelper.getEmpty()),
      organization: OrganizationHelper.toDto(OrganizationHelper.getEmpty()),
      transaction: {
        id: '', type: '', amount: 0
      }
    }
  }

  static fromDtoUpdatePayload(dto: Documentdto): DocumentUpdatePayload {
    return {
      description: dto.description,
      document_id: dto.document_id,
      employee: (isNil(dto.employee)) ? EmployeeHelper.toDto(EmployeeHelper.getEmpty()) : dto.employee,
      freeAccess: false,
      name: dto.name,
      organization: (isNil(dto.organization)) ? OrganizationHelper.toDto(OrganizationHelper.getEmpty()) : dto.organization,
      path: dto.path,
      type: dto.type
    }
  }

}




