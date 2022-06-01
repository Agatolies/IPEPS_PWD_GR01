import { TrainingDraftActiveDto } from '@shared/model/dto/training-draft-active.dto';

export interface BaseInformationTrainingDraftActiveDto extends TrainingDraftActiveDto {
  name: string;
  description: string;
}
