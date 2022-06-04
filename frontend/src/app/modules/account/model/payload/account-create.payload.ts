import {PayloadInterface} from "@shared/model";

export interface AccountCreatePayload extends PayloadInterface{
  firstname: string;
  lastname: string;
}
