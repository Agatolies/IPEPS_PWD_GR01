import {Employee} from "@employee/model";

export interface Account{
  id: string;
  firstname: string;
  lastname: string;
  employees: Employee;
}
