import {IsEmpty} from "@shared/model/is-empty";

export interface Document extends IsEmpty {
  id: string;
  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;
  employee_id: string;
  organization_id: string;
  transaction_id: string;
}
