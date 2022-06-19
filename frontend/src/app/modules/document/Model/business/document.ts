import { IsEmpty } from "@shared/model/is-empty";
import { Employee } from '@employee/model';
import { Organization } from '@organization/model';
import { TransactionDto } from '../../../wallet/model/dto/transaction.dto';

export interface Document extends IsEmpty {
  id: string;
  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;
  /*employee?: Employee;
  organization?: Organization;
  transaction?: TransactionDto; // bullshit mais pas de temps pour régler ceci.*/
}
