import {DtoInterface, PayloadInterface} from '@shared/model';
import {Business} from '@shared/model/business.interface';

export interface Helper {
  fromDto(dto: DtoInterface): Business;

  toDto(business: Business): DtoInterface;

  getEmpty(): Business;

  getCreatePaylaod(): PayloadInterface

  fromDtoToUpdatePayload(dto: DtoInterface): PayloadInterface;
}
