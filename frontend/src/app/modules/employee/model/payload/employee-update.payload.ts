import {PayloadInterface} from "@shared/model";
import {Organization} from "@organization/model";
import {Account} from "@account/model";

export interface EmployeeUpdatePayload extends PayloadInterface{
  employee_id: string;
  role: string;
  actif: boolean;
  organization: Organization;
  account: Account;
}
