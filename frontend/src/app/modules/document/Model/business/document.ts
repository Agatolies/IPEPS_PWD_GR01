import {IsEmpty} from "@shared/model/is-empty";

export interface Document extends IsEmpty {
  document_id: string;
  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;
  employee:string;
  deleted: boolean;
}
