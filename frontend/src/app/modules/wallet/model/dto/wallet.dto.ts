import {OrganizationDto} from "@organization/model";
import {EmployeeDto} from "@employee/model";

export interface WalletDto {

  wallet_id: string;
  name: string;
  description: string;
  actif: boolean;
  type: string;
  organization: OrganizationDto;
  employee: EmployeeDto;
}
