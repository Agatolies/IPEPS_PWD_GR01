import { PayloadInterface } from "@shared/model";
import { EmployeeDto } from '@employee/model';
import { OrganizationDto } from '@organization/model';

export interface DocumentUpdatePayload extends PayloadInterface {
  document_id: string;
  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;
  employee: EmployeeDto;
  organization: OrganizationDto;
}
