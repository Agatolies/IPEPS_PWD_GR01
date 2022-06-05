import {Organization, OrganizationCreatePayload, OrganizationDto, OrganizationUpdatePayload} from "@Organization/model";

export class OrganizationHelper {
  public static fromDto(dto: OrganizationDto): Organization {
    return {
      id: dto.Organization_id,
      name: dto.name,
      description: dto.description,
      actif: dto.actif
    }
  }

  public static toDto(business: Organization): OrganizationDto {
    return {
      organization_id: business.id,
      name: business.name,
      description: business.description,
      actif: business.actif
    }
  }

  public static getEmpty(): Organization {
    return {
      id: '',
      name: '',
      description: '',
      actif: ''
    }
  }

  static getCreatePaylaod(): OrganizationCreatePayload {
    return {
      name: '',
      description: '',
      actif: ''
    }
  }

  static fromDtoToUpdatePayload(dto: OrganizationDto): OrganizationUpdatePayload {
    return {...dto}
  }
}
