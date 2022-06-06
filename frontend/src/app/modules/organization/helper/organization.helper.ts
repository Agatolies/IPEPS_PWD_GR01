import {Organization, OrganizationCreatePayload, OrganizationDto, OrganizationUpdatePayload} from "@organization/model";

export class OrganizationHelper {
  public static fromDto(dto: OrganizationDto): Organization {
    return {
      id: dto.organization_id,
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
      actif: true
    }
  }

  static getCreatePaylaod(): OrganizationCreatePayload {
    return {
      name: '',
      description: '',
      actif: true
    }
  }

  static fromDtoToUpdatePayload(dto: OrganizationDto): OrganizationUpdatePayload {
    return {...dto}
  }
}
