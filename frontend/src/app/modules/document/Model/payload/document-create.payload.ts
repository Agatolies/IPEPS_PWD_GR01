import { PayloadInterface } from '@shared/model';

export interface DocumentCreatePayload extends PayloadInterface {
  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;
  employee: string;
}
