import {DtoInterface} from '@shared/model';

export interface ApiResponse extends DtoInterface{
  result: boolean;
  data: DtoInterface | DtoInterface[] | null;
  error_code: string | null;
}
