import {OrganizationDto} from "@organization/model";
import {AccountDto} from "@account/model";

export interface EmployeeDto {
  employee_id: string;
  role: string;
  actif: boolean;
  organization: string;
  account: string;
}
