import { PayloadInterface } from '@shared/model';

export interface EmployeeSearchPayload extends PayloadInterface {
  employee_id?: string;
  role?: string;
  actif?: boolean;
  organization?: string;
}
