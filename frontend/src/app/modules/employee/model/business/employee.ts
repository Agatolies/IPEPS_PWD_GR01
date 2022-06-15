import {Organization} from "@organization/model";
import {Account} from "@account/model";

export interface Employee {
  id: string;
  role: string;
  actif: boolean;
  organization: Organization;
  account: Account;
}
