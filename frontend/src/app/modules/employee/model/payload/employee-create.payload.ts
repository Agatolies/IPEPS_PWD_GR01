import { PayloadInterface } from '@shared/model';
import {Organization} from "@organization/model";
import {Account} from "@account/model";

export interface EmployeeCreatePayload extends PayloadInterface {
  role: string;
  actif: boolean;
  organization: Organization;
  account: Account;
}
