import {PayloadInterface} from "@shared/model";
import { EmployeeDto } from '@employee/model';
import { OrganizationDto } from '@organization/model';
import { TransactionDto } from '../../../wallet/model/dto/transaction.dto';

export interface DocumentUpdatePayload  extends PayloadInterface{
  document_id:string;
  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;
  employee: EmployeeDto;
  organization: OrganizationDto;
  transaction: TransactionDto;
}
