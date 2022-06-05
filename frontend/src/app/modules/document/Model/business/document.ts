import {IsEmpty} from "@shared/model/enum/is-empty";

export interface Document extends IsEmpty {
  document_id: string;
  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;
}