import {PayloadInterface} from "@shared/model";

export interface EmployeeUpdatePayload extends PayloadInterface{
  employee_id: string;
  role: string;
  actif: boolean;
  organization: string;
  account: string;
}
