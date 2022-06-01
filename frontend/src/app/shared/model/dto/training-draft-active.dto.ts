import { BaseEntityDto } from '@shared/model/dto/base-entity.dto';

export interface TrainingDraftActiveDto extends BaseEntityDto{
  draft:boolean;
  training:boolean;
  actif:boolean;
}
