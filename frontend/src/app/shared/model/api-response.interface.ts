import {DtoInterface} from '@shared/model';

export interface ApiResponse extends DtoInterface{
  result: boolean;
  data: any | null;
  code: string | null;
}
