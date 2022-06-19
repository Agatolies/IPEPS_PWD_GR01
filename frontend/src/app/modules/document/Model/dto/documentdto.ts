import { EmployeeDto } from '@employee/model';
import { OrganizationDto } from '@organization/model';
import { TransactionDto } from '../../../wallet/model/dto/transaction.dto';


export interface Documentdto {
  document_id: string;

  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;
  employee?: EmployeeDto;
  organization?: OrganizationDto;
  transaction?: TransactionDto;
}
