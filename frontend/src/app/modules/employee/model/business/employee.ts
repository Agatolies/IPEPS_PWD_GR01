import { Organization } from "@organization/model";

export interface Employee {
  id: string;
  role: string;
  actif: boolean;
  organization: Organization;
  firstname: string;
  lastname: string;
}
