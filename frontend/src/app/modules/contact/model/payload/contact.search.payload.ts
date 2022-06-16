import {PayloadInterface} from "@shared/model";

export interface ContactSearchPayload extends PayloadInterface{
  contact_id?: string;
  lastname?: string;
  firstname?: string;
  email?: string;
  phone?: string;
}
