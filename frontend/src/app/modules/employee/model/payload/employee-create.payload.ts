import { PayloadInterface } from '@shared/model';

export interface EmployeeCreatePayload extends PayloadInterface {
  role: string;
  actif: boolean;
  organization: string;
  account: string;
}
