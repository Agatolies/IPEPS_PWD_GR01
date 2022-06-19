import {PayloadInterface} from "@shared/model";

//payload = donnée transmise pour créer contact
export interface ContactUpdatePayload extends PayloadInterface{
  contact_id: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  address: string;

  deleted:boolean;
  deletedAt:Date;
  deletedBy:string;
}
