import {PayloadInterface} from "@shared/model";

export interface DocumentUpdatePayload  extends PayloadInterface{
  name: string;
  description: string;
  path: string;
  type: string;
  freeAccess: boolean;

  deleted: boolean;
}
