import {EmployeeDto} from "@employee/model";

export interface AccountDto{
  account_id: string;
  firstname: string;
  lastname: string;
  employees?: EmployeeDto[]
}
