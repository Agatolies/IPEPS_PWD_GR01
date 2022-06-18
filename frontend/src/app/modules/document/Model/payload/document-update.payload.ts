import {PayloadInterface} from "@shared/model";

export interface DocumentUpdatePayload  extends PayloadInterface{
  document_id:string;
  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;
  employee_id: string;
  organization_id: string;
  transaction_id: string;
}
