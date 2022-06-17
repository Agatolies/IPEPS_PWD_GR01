import {OrganizationDto} from "@organization/model";
import {AccountDto} from "@account/model";
import {WalletDto} from "../../../wallet/model";
import {SalaryDto} from "../../../salary/model";
import {TransactionDto} from "../../../transaction/model";

export interface EmployeeDto {
  employee_id: string;
  role: string;
  actif: boolean;
  // addresses: AddressDto[];
  wallets: WalletDto[];
  salaries: SalaryDto[];
  transactions: TransactionDto[];
  organization: OrganizationDto;
  account: AccountDto;
}
