import {PayloadInterface} from "@shared/model";

export interface ContactCreatePayload extends PayloadInterface{
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}
