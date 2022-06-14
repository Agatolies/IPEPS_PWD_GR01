import {OrganizationDto} from "@organization/model";
import {AccountDto} from "@account/model";
import {WalletDto} from "../../../wallet/model";
import {SalaryDto} from "../../../salary/model";

export interface EmployeeDto {
  employee_id: string;
  role: string;
  actif: boolean;
  // addresses: AddressDto[];
  wallets: WalletDto[];
  salaries: SalaryDto[];
  organization: OrganizationDto;
  account: AccountDto;
}
